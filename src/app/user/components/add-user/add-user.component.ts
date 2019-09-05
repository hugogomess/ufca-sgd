import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

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
  permissions: [];

  @ViewChild('userForm', { static: true }) userForm: NgForm;

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.user = new User('hugogomess', 'Hugo', 'hugo@gmail.com', 'skdfksdkfks');
  }

  public addUser(): void {
    if (true) {
      this.userService.addUser(this.user).subscribe(
        res => this.router.navigate['admin/usuarios/'],
        error => this.error = error
      );

      console.log(this.error);
    }
  }

}
