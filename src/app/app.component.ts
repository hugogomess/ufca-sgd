import { Component } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isAdminPanel: boolean;
  isLoginPage: boolean;

  constructor(private router: Router) {

    this.isAdminPanel = false;

    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        if (event.url === '/admin' ||
        event.url === '/admin/usuarios' ||
        event.url === '/admin/demandas' ||
        event.url === '/admin/matrizes-gut' ||
        event.url === '/admin/termos-de-abertura') {
          this.isAdminPanel = true;
        } else if (event.url === '/login') {
          this.isAdminPanel = false;
          this.isLoginPage = true;
        } else {
          this.isAdminPanel = false;
          this.isLoginPage = false;
        }
      }
    });
  }
}
