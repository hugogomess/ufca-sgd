import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

import { Demand } from '../../models';
import { DemandService } from '../../services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  demands: Demand[] = [];
  error: any;

  constructor(
    private demandService: DemandService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.findAllDemands();
  }

  private findAllDemands() {
    this.spinner.show('home-spinner');
    this.demandService.findAll().subscribe(
      res => {
        this.demands = res;
        this.spinner.hide('home-spinner');
      },
      error => {
        this.error = error;
        this.demands = [];
        this.spinner.hide('home-spinner');
      }
    );
  }

}
