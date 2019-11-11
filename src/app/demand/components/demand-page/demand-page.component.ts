import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Demand } from '../../models';
import { DemandService } from '../../services';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-demand-page',
  templateUrl: './demand-page.component.html',
  styleUrls: ['./demand-page.component.css']
})
export class DemandPageComponent implements OnInit {

  demandId: string;
  demand: Demand;
  error: any;

  constructor(
    private route: ActivatedRoute,
    private spinner: NgxSpinnerService,
    private demandService: DemandService,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.demandId = params.get('demandId');
    });

    this.findDemandById(this.demandId);
  }

  findDemandById(demandId: string) {
    this.spinner.show('demand-spinner');
    this.demandService.findById(parseInt(demandId)).subscribe(
      res => {
        this.demand = res;
        this.spinner.hide('demand-spinner');
      },
      error => {
        this.error = error;
        this.demand = new Demand();
        this.spinner.hide('demand-spinner');
      }
    );
  }

}
