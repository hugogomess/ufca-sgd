import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { User } from '../../models';
import { UserService } from '../../services';


@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  user: User;
  error: any;

  @Input() userId: number;
  @Input() username: string;
  @Output() confirm = new EventEmitter();

  @ViewChild('userFormUpdate', { static: true }) userFormUpdate: NgForm;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.user = new User();
    this.userService.findById(this.userId).subscribe(
      res => this.user = res,
      error => this.error = error // TODO
    );
  }

  public updateUser() {
    if (this.userFormUpdate.form.valid) {
      this.userService.updateUser(this.user).subscribe(
        success => {
          const successMessage = 'O ususário ' + this.username + ' foi atualizado com sucesso!';
          this.closeModal();
          this.confirm.emit({message: successMessage});
        },
        error => this.error = error
      );
    }
  }

  private closeModal(): void {
    $('body').removeAttr('style');
    $('body').removeClass('modal-open');
    $('#update-' + this.userId).removeClass('show');
    $('div.modal-backdrop').remove('div.modal-backdrop');
    $('#update-' + this.userId).removeAttr('style');
    $('#update-' + this.userId).addClass('modal-close');
  }

}
