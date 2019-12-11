import { Component, OnInit, ViewChild, EventEmitter, Output, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';

import { Demand } from '../../models';
import { DemandService } from '../../services';
import { GutMatrixService, GutMatrix } from 'src/app/gut-matrix';


@Component({
  selector: 'app-add-demand',
  templateUrl: './add-demand.component.html',
  styleUrls: ['./add-demand.component.css']
})
export class AddDemandComponent implements OnInit {

  demand: Demand;
  error: any;
  gutMatrices: GutMatrix[];

  @Input() id: string;
  @Output() confirm = new EventEmitter();

  @ViewChild('demandFormCreate', { static: true }) demandFormCreate: NgForm;

  constructor(
    private demandService: DemandService,
    private gutMatrixService: GutMatrixService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.demand = new Demand();

    this.gutMatrixService.findAll().subscribe(
      res => {
        this.gutMatrices = res;
      },
      error => {
        this.error = error;
        this.gutMatrices = [];
      }
    );
  }

  public addDemand() {
    if (this.demandFormCreate.form.valid) {
      this.spinner.show('add-demand-spinner');
      this.demandService.addDemand(this.demand).subscribe(
        res => {
          const successMessage = 'Demanda aberta com sucesso!';
          this.spinner.hide('add-demand-spinner');
          this.closeModal();
          this.confirm.emit({message: successMessage});
        },
        error => {
          // ganbiarra temporária, error.error is a array list?
          // o erro acontece pq está sendo mandada duas requisições iguais ao inves de uma
          if (error.status === 500) {
            const successMessage = 'Demanda aberta com sucesso!';
            this.spinner.hide('add-demand-spinner');
            this.closeModal();
            this.confirm.emit({message: successMessage});
          } else {
            this.spinner.hide('add-demand-spinner');
            this.error = error;
          }
        }
      );
    }
  }

  private closeModal(): void {
    $('body').removeAttr('style');
    $('body').removeClass('modal-open');
    $('#add-demand-modal').removeClass('show');
    $('div.modal-backdrop').remove('div.modal-backdrop');
    $('#add-demand-modal').removeAttr('style');
    $('#add-demand-modal').addClass('modal-close');
  }

}
