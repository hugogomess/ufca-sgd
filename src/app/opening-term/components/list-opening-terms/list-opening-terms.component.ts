import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';
import { DataTableDirective } from 'angular-datatables';

import { OpeningTerm } from '../../models';
import { OpeningTermService } from '../../services';
import { Demand, DemandService } from '../../../demand';
import { ptBrDataTable } from '../../../utils';

@Component({
  selector: 'app-list-opening-terms',
  templateUrl: './list-opening-terms.component.html',
  styleUrls: ['./list-opening-terms.component.css']
})
export class ListOpeningTermsComponent implements OnInit, OnDestroy {

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  error: any;
  openingTerms: OpeningTerm[] = [];
  demands: Demand[];
  success: boolean;
  successMessage: string;

  @ViewChild(DataTableDirective, {static: false})
  dtElement: DataTableDirective;

  constructor(
    private openingTermService: OpeningTermService,
    private demandService: DemandService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.dtOptions = {
      order: [[ 4, "desc" ]],
      paging: true,
      pageLength: 10,
      stateSave: false,
      retrieve: true,
      language: ptBrDataTable('termo de abertura', 'termos de abertura', 'M')
    };
    this.findAllOpeningTerms();

    this.demandService.findAll().subscribe(
      res => {
        this.demands = res;
      },
      error => {
        this.error = error;
        this.demands = [];
      }
    );

  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  private findAllOpeningTerms() {
    this.spinner.show('datatable-spinner');
    this.openingTermService.findAll().subscribe(
      res => {
        this.openingTerms = res;
        this.render();
        this.spinner.hide('datatable-spinner');
      },
      error => {
        this.error = error;
        this.openingTerms = [];
        this.render();
        this.spinner.hide('datatable-spinner');
      }
    );
  }

  public setSuccessAlert(message: string): void {
    this.closeAlert();
    this.findAllOpeningTerms();
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
