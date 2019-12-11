import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';
import { DataTableDirective } from 'angular-datatables';

import { GutMatrix } from '../../models';
import { GutMatrixService } from '../../services';
import { ptBrDataTable } from '../../../utils';

@Component({
  selector: 'app-list-gut-matrices',
  templateUrl: './list-gut-matrices.component.html',
  styleUrls: ['./list-gut-matrices.component.css']
})
export class ListGutMatricesComponent implements OnInit, OnDestroy {

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  error: any;
  gutMatrices: GutMatrix[] = [];
  success: boolean;
  successMessage: string;
  gravityStringList: any[];
  urgencyStringList: any[];
  trendStringList: any[];

  @ViewChild(DataTableDirective, {static: false})
  dtElement: DataTableDirective;

  constructor(
    private gutMatrixService: GutMatrixService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.dtOptions = {
      order: [[ 5, "desc" ]],
      paging: true,
      pageLength: 10,
      stateSave: false,
      retrieve: true,
      language: ptBrDataTable('matriz gut', 'matrizes gut', 'F')
    };
    this.findAllGutMatrices();

    this.gravityStringList = [
      {
        'gravity': 1,
        'text': 'Sem gravidade'
      },
      {
        'gravity': 2,
        'text': 'Pouco grave'
      },
      {
        'gravity': 3,
        'text': 'Grave'
      },
      {
        'gravity': 4,
        'text': 'Muito grave'
      },
      {
        'gravity': 5,
        'text': 'Extremamente grave'
      },
    ];

    this.urgencyStringList = [
      {
        'urgency': 1,
        'text': 'Pode esperar'
      },
      {
        'urgency': 2,
        'text': 'Pouco urgente'
      },
      {
        'urgency': 3,
        'text': 'Urgente'
      },
      {
        'urgency': 4,
        'text': 'Muito urgente'
      },
      {
        'urgency': 5,
        'text': 'Necessidade de ação imediata'
      },
    ];

    this.trendStringList = [
      {
        'trend': 1,
        'text': 'Não irá mudar'
      },
      {
        'trend': 2,
        'text': 'Irá piorar a longo prazo'
      },
      {
        'trend': 3,
        'text': 'Irá piorar a médio prazo'
      },
      {
        'trend': 4,
        'text': 'Irá piorar a curto prazo'
      },
      {
        'trend': 5,
        'text': 'Irá piorar rapidamente'
      },
    ];
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  private findAllGutMatrices() {
    this.spinner.show('datatable-spinner');
    this.gutMatrixService.findAll().subscribe(
      res => {
        this.gutMatrices = res;
        this.render();
        this.spinner.hide('datatable-spinner');
      },
      error => {
        this.error = error;
        this.gutMatrices = [];
        this.render();
        this.spinner.hide('datatable-spinner');
      }
    );
  }

  public setSuccessAlert(message: string): void {
    this.closeAlert();
    this.findAllGutMatrices();
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
