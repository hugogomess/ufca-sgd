import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';

import { User } from '../../models';
import { UserService } from '../../services';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  user: User;
  error: any;
  permissions: string[];

  @Input() userId: number;
  @Input() username: string;
  @Output() confirm = new EventEmitter();

  @ViewChild('userForm', { static: true }) userForm: NgForm;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.userService.findById(this.userId).subscribe(
      res => this.user = res,
      error => this.error = error // TODO
    );
  }

  public updateUser() {
    if (this.userForm.form.valid) {
      this.userService.updateUser(this.user).subscribe(
        success => {
          const successMessage = 'O ususário ' + this.username + ' foi atualizado com sucesso!';
          this.confirm.emit({ alertType: 'success', message: successMessage });
        },
        error => this.confirm.emit({ alertType: 'error', message: error.message })
      );
    }
  }

}
