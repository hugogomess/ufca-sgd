import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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
    private userService: UserService
  ) { }

  ngOnInit() {
  }

  public deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe(
      success => {
        const successMessage = 'O ususário ' + this.username + ' foi excluído com sucesso!';
        this.closeModal();
        this.confirm.emit({message: successMessage});
      },
      error => this.error = error
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
