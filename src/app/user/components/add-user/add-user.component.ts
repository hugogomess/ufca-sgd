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
  errors: any;
  permissions: string[];

  @ViewChild('userForm', { static: true }) userForm: NgForm;

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.user = new User();
  }

  public addUser(): void {
    this.setPermissions();
    if (this.userForm.form.valid) {
      this.userService.addUser(this.user).subscribe(
        res => this.router.navigate['admin/usuarios/'],
        error => this.errors = error
      );
    }
  }

  public setPermissions(): void {
    if (this.permissions.includes('isAdmin')) {
      this.user.isAdmin = true;
    } else {
      this.user.isAdmin = false;
    }

    if (this.permissions.includes('isDemandManager')) {
      this.user.isDemandManager = true;
    } else {
      this.user.isDemandManager = false;
    }

    if (this.permissions.includes('isProjectManager')) {
      this.user.isProjectManager = true;
    } else {
      this.user.isProjectManager = false;
    }
  }

}
