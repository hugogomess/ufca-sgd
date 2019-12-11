import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';

import { OpeningTerm } from '../../models';
import { OpeningTermService } from '../../services';
import { Demand, DemandService } from '../../../demand';


@Component({
  selector: 'app-update-opening-term',
  templateUrl: './update-opening-term.component.html',
  styleUrls: ['./update-opening-term.component.css']
})
export class UpdateOpeningTermComponent implements OnInit {

  openingTerm: OpeningTerm;
  error: any;
  demands: Demand[];

  @Input() openingTermId: number;
  @Input() openingTermName: string;
  @Output() confirm = new EventEmitter();

  @ViewChild('openingTermFormUpdate', { static: true }) openingTermFormUpdate: NgForm;

  constructor(
    private openingTermService: OpeningTermService,
    private demandService: DemandService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.openingTerm = new OpeningTerm();
    this.spinner.show('update-opening-term-spinner-' + this.openingTermId);
    this.openingTermService.findById(this.openingTermId).subscribe(
      res => {
        this.spinner.hide('update-opening-term-spinner-' + this.openingTermId);
        this.openingTerm = res;
      },
      error => {
        this.spinner.hide('update-opening-term-spinner-' + this.openingTermId);
        this.error = error; // TODO
      }
    );

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

  public updateOpeningTerm() {
    if (this.openingTermFormUpdate.form.valid) {
      this.spinner.show('update-opening-term-spinner-' + this.openingTermId);
      this.openingTermService.updateOpeningTerm(this.openingTerm).subscribe(
        success => {
          const successMessage = 'O Termo de Abertura ' + this.openingTermName + ' foi atualizado com sucesso!';
          this.spinner.hide('update-opening-term-spinner-' + this.openingTermId);
          this.closeModal();
          this.confirm.emit({message: successMessage});
        },
        error => {
          this.spinner.hide('update-opening-term-spinner-' + this.openingTermId);
          this.error = error;
        }
      );
    }
  }

  private closeModal(): void {
    $('body').removeAttr('style');
    $('body').removeClass('modal-open');
    $('#update-' + this.openingTermId).removeClass('show');
    $('div.modal-backdrop').remove('div.modal-backdrop');
    $('#update-' + this.openingTermId).removeAttr('style');
    $('#update-' + this.openingTermId).addClass('modal-close');
  }

}
