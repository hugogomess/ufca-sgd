import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

import { UserService } from '../../services';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {

  error: any;

  @Input() userId: number;
  @Input() username: string;
  @Output() confirm = new EventEmitter();

  constructor(
    private userService: UserService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
  }

  public deleteUser(id: number) {
    this.spinner.show('delete-user-spinner-' + this.userId);
    this.userService.deleteUser(id).subscribe(
      success => {
        const successMessage = 'O ususário ' + this.username + ' foi excluído com sucesso!';
        this.spinner.hide('delete-user-spinner-' + this.userId);
        this.closeModal();
        this.confirm.emit({message: successMessage});
      },
      error => {
        this.spinner.hide('delete-user-spinner-' + this.userId);
        this.error = error;
      }
    );
  }

  private closeModal(): void {
    $('body').removeAttr('style');
    $('body').removeClass('modal-open');
    $('#delete-' + this.userId).removeClass('show');
    $('div.modal-backdrop').remove('div.modal-backdrop');
    $('#delete-' + this.userId).removeAttr('style');
    $('#delete-' + this.userId).addClass('modal-close');
  }

}
