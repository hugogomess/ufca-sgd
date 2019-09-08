import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { JwtService } from '../../services';
import { NgForm } from '@angular/forms';

import { User } from '../../models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User;
  error: any;

  @ViewChild('userForm', { static: true }) userForm: NgForm;

  constructor(
    private jwtService: JwtService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.user = new User('', '');
  }

  login() {
    if (this.userForm.form.valid) {
      this.jwtService.login(this.user).subscribe(
        success => this.router.navigate(['']),
        error => this.error = error
      );
    }
  }

}
