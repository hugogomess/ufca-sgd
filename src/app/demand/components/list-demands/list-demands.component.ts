import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';
import { DataTableDirective } from 'angular-datatables';

import { Demand } from '../../models';
import { DemandService } from '../../services';
import { ptBrDataTable } from '../../../utils';

@Component({
  selector: 'app-list-demands',
  templateUrl: './list-demands.component.html',
  styleUrls: ['./list-demands.component.css']
})
export class ListDemandsComponent implements OnInit, OnDestroy {

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  error: any;
  demands: Demand[] = [];
  success: boolean;
  successMessage: string;

  @ViewChild(DataTableDirective, {static: false})
  dtElement: DataTableDirective;

  constructor(
    private demandService: DemandService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.dtOptions = {
      order: [],
      paging: true,
      pageLength: 10,
      stateSave: false,
      retrieve: true,
      language: ptBrDataTable('demanda', 'demandas', 'F')
    };
    this.findAllDemands();
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  private findAllDemands() {
    this.spinner.show('datatable-spinner');
    this.demandService.findAll().subscribe(
      res => {
        this.demands = res;
        this.render();
        this.spinner.hide('datatable-spinner');
      },
      error => {
        this.error = error;
        this.demands = [];
        this.render();
        this.spinner.hide('datatable-spinner');
      }
    );
  }

  public setSuccessAlert(message: string): void {
    this.closeAlert();
    this.findAllDemands();
    this.success = true;
    this.successMessage = message;
  }

  public closeAlert(): void {
    this.success = false;
    this.error = null;
  }

  render(): void {
    if (this.dtElement.dtInstance) {
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.destroy();
        this.dtTrigger.next();
      });
    } else {
      this.dtTrigger.next();
    }
  }
}
