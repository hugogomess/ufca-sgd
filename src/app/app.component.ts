import { Component } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isLoginPage: boolean;

  constructor(private router: Router) {

    this.isLoginPage = false;

    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        if (event.url === '/login') {
          this.isLoginPage = true;
        } else {
          this.isLoginPage = false;
        }
      }
    });
  }
}
