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
        error => this.error = error
      );
    }
  }

  public setPermissions(): void {
    if (this.permissions.includes('is_admin')) {
      this.user.is_admin = true;
    } else {
      this.user.is_admin = false;
    }

    if (this.permissions.includes('is_demand_manager')) {
      this.user.is_demand_manager = true;
    } else {
      this.user.is_demand_manager = false;
    }

    if (this.permissions.includes('is_project_manager')) {
      this.user.is_project_manager = true;
    } else {
      this.user.is_project_manager = false;
    }
  }

}
