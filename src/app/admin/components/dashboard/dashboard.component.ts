import { Component, OnInit } from '@angular/core';
import { DemandService, Demand } from '../../../demand';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  allDemands: Demand[];
  openDemands: Demand[];
  inProgressDemands: Demand[];
  closeDemands: Demand[];

  constructor(
    private demandService: DemandService,
  ) { }
  startAnimationForLineChart(chart){
      let seq: any, delays: any, durations: any;
      seq = 0;
      delays = 80;
      durations = 500;


  }

  ngOnInit() {
    this.findAllDemands();
    this.findOpenDemands();
    this.findCloseDemands();
    this.findInProgressDemands();
  }

  private findAllDemands() {
    this.demandService.findAll().subscribe(
      res => {
        this.allDemands = res;
      },
      error => {
        this.allDemands = [];
      }
    );
  }

  private findOpenDemands() {
    this.demandService.findByFilter('status', 'ABERTA').subscribe(
      res => {
        this.openDemands = res;
      },
      error => {
        this.openDemands = [];
      }
    );
  }

  private findCloseDemands() {
    this.demandService.findByFilter('status', 'FECHADA').subscribe(
      res => {
        this.closeDemands = res;
      },
      error => {
        this.closeDemands = [];
      }
    );
  }

  private findInProgressDemands() {
    this.demandService.findByFilter('status', 'EM ANDAMENTO').subscribe(
      res => {
        this.inProgressDemands = res;
      },
      error => {
        this.inProgressDemands = [];
      }
    );
  }

}
