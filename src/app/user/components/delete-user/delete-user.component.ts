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
        this.confirm.emit({ alertType: 'success', message: successMessage  });
      },
      error => this.confirm.emit({ alertType: 'error', message: error.message })
    );
  }

}
