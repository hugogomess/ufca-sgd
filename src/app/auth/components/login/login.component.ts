import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtService } from '../../services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  error: any;

  constructor(
    private jwtService: JwtService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  login(username: string, password: string) {
    this.jwtService.login(username, password).subscribe(
      success => this.router.navigate(['']),
      error => this.error = error
    );
  }

}
