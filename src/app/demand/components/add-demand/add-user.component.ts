import { Component, OnInit, ViewChild, EventEmitter, Output, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';

import { User } from '../../models';
import { UserService } from '../../services';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  user: User;
  error: any;
  passwordConfirm: string;

  @Input() id: string;
  @Output() confirm = new EventEmitter();

  @ViewChild('userFormCreate', { static: true }) userFormCreate: NgForm;

  constructor(
    private userService: UserService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.user = new User();
  }

  public addUser() {
    if (this.userFormCreate.form.valid) {
      this.spinner.show('add-user-spinner');
      this.userService.addUser(this.user).subscribe(
        res => {
          const successMessage = 'Ususário criado com sucesso!';
          this.spinner.hide('add-user-spinner');
          this.closeModal();
          this.confirm.emit({message: successMessage});
        },
        error => {
          // ganbiarra temporária, error.error is a array list?
          if (error.status === 500) {
            const successMessage = 'Ususário criado com sucesso!';
            this.spinner.hide('add-user-spinner');
            this.closeModal();
            this.confirm.emit({message: successMessage});
          } else {
            this.spinner.hide('add-user-spinner');
            this.error = error;
          }
        }
      );
    }
  }

  private closeModal(): void {
    $('body').removeAttr('style');
    $('body').removeClass('modal-open');
    $('#add-user-modal').removeClass('show');
    $('div.modal-backdrop').remove('div.modal-backdrop');
    $('#add-user-modal').removeAttr('style');
    $('#add-user-modal').addClass('modal-close');
  }

}
