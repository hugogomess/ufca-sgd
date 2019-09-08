import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { UserService } from '../../services';

@Component({
  selector: 'app-active-user',
  templateUrl: './active-user.component.html',
  styleUrls: ['./active-user.component.css']
})
export class ActiveUserComponent implements OnInit {

  @Input() userId: number;
  @Input() username: string;
  @Output() confirm = new EventEmitter();

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
  }

  public activeUser(id: number) {
    this.userService.activeUser(id).subscribe(
      success => {
        const successMessage = 'O ususário ' + this.username + ' foi ativado com sucesso!';
        this.confirm.emit({ alertType: 'success', message: successMessage  });
      },
      error => this.confirm.emit({ alertType: 'error', message: error.message })
    );
  }

}
