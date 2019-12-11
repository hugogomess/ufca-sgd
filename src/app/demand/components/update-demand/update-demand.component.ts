import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';

import { Demand } from '../../models';
import { DemandService } from '../../services';
import { GutMatrixService, GutMatrix } from 'src/app/gut-matrix';


@Component({
  selector: 'app-update-demand',
  templateUrl: './update-demand.component.html',
  styleUrls: ['./update-demand.component.css']
})
export class UpdateDemandComponent implements OnInit {

  demand: Demand;
  error: any;
  gutMatrices: GutMatrix[];

  @Input() demandId: number;
  @Input() demandName: string;
  @Output() confirm = new EventEmitter();

  @ViewChild('demandFormUpdate', { static: true }) demandFormUpdate: NgForm;

  constructor(
    private demandService: DemandService,
    private gutMatrixService: GutMatrixService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.demand = new Demand();
    this.spinner.show('update-demand-spinner-' + this.demandId);
    this.demandService.findById(this.demandId).subscribe(
      res => {
        this.spinner.hide('update-demand-spinner-' + this.demandId);
        this.demand = res;
      },
      error => {
        this.spinner.hide('update-demand-spinner-' + this.demandId);
        this.error = error; // TODO
      }
    );

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

  public updateDemand() {
    if (this.demandFormUpdate.form.valid) {
      this.spinner.show('update-demand-spinner-' + this.demandId);
      this.demandService.updateDemand(this.demand).subscribe(
        success => {
          const successMessage = 'A Demanda ' + this.demandName + ' foi atualizado com sucesso!';
          this.spinner.hide('update-demand-spinner-' + this.demandId);
          this.closeModal();
          this.confirm.emit({message: successMessage});
        },
        error => {
          this.spinner.hide('update-demand-spinner-' + this.demandId);
          this.error = error;
        }
      );
    }
  }

  private closeModal(): void {
    $('body').removeAttr('style');
    $('body').removeClass('modal-open');
    $('#update-' + this.demandId).removeClass('show');
    $('div.modal-backdrop').remove('div.modal-backdrop');
    $('#update-' + this.demandId).removeAttr('style');
    $('#update-' + this.demandId).addClass('modal-close');
  }

}
