import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  constructor(private router: Router) {
    this.router.errorHandler = (error: any) => {
        let routerError = error.toString();
        if (routerError.indexOf('Cannot match any routes') >= 0 ) {
           this.router.navigate(['/404']);
        } else {
           throw error;
        }
    }
  }
  ngOnInit() {
  }


}
