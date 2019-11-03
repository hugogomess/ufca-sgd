import { Component } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  showStatics: boolean;
  showHeader: boolean;

  constructor(private router: Router) {

    this.showStatics = true;
    this.showHeader = true;

    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        if (event.url === '/') {
          this.showStatics = false;
          this.showHeader = true;
        } else if (event.url === '/login') {
          this.showStatics = false;
          this.showHeader = false;
        } 
        else {
          this.showStatics = true;
          this.showHeader = false;
        }
      }
    });
  }
}
