import { Component } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  showStatics: boolean;

  constructor(private router: Router) {

    this.showStatics = true;

    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        if (event.url === '/' || event.url === '/login') {
          this.showStatics = false;
        } else {
          this.showStatics = true;
        }
      }
    });
  }
}
