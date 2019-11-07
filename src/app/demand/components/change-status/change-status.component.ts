import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';

import { Demand } from '../../models';
import { DemandService } from '../../services';

@Component({
  selector: 'app-change-status',
  templateUrl: './change-status.component.html',
  styleUrls: ['./change-status.component.css']
})
export class ChangeStatusComponent implements OnInit {

  demand: Demand;
  error: any;
  statuses: string[];

  @Input() demandId: number;
  @Input() demandName: string;
  @Output() confirm = new EventEmitter();

  @ViewChild('demandChangeStatusForm', { static: true }) demandChangeStatusForm: NgForm;

  constructor(
    private demandService: DemandService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.demand = new Demand();
    this.statuses = ['ABERTA', 'EM ANDAMENTO', 'FECHADA'];
    this.spinner.show('change-status-spinner-' + this.demandId);
    this.demandService.findById(this.demandId).subscribe(
      res => {
        this.spinner.hide('change-status-spinner-' + this.demandId);
        this.demand = res;
      },
      error => {
        this.spinner.hide('change-status-spinner-' + this.demandId);
        this.error = error; // TODO
      }
    );
  }

  public changeStatus() {
    if (this.demandChangeStatusForm.form.valid) {
      this.spinner.show('change-status-spinner-' + this.demandId);
      this.demandService.updateDemand(this.demand).subscribe(
        success => {
          const successMessage = 'O status da demanda ' + this.demandName + ' foi alterado com sucesso!';
          this.spinner.hide('change-status-spinner-' + this.demandId);
          this.closeModal();
          this.confirm.emit({message: successMessage});
        },
        error => {
          this.spinner.hide('change-status-spinner-' + this.demandId);
          this.error = error;
        }
      );
    }
  }

  private closeModal(): void {
    $('body').removeAttr('style');
    $('body').removeClass('modal-open');
    $('#change-status-' + this.demandId).removeClass('show');
    $('div.modal-backdrop').remove('div.modal-backdrop');
    $('#change-status-' + this.demandId).removeAttr('style');
    $('#change-status-' + this.demandId).addClass('modal-close');
  }

}
