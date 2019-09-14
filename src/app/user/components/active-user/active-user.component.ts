import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { UserService } from '../../services';

@Component({
  selector: 'app-active-user',
  templateUrl: './active-user.component.html',
  styleUrls: ['./active-user.component.css']
})
export class ActiveUserComponent implements OnInit {

  error: any;

  @Input() userId: number;
  @Input() username: string;
  @Output() confirm = new EventEmitter();

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
  }

  public activeUser(id) {
    this.userService.activeUser(id).subscribe(
      success => {
        const successMessage = 'O ususário ' + this.username + ' foi ativado com sucesso!';
        this.closeModal();
        this.confirm.emit({message: successMessage});
      },
      error => this.error = error
    );
  }

  private closeModal(): void {
    $('body').removeAttr('style');
    $('body').removeClass('modal-open');
    $('#active-' + this.userId).removeClass('show');
    $('div.modal-backdrop').remove('div.modal-backdrop');
    $('#active-' + this.userId).removeAttr('style');
    $('#active-' + this.userId).addClass('modal-close');
  }

}
