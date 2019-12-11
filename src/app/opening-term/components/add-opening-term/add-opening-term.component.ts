import { Component, OnInit, ViewChild, EventEmitter, Output, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';

import { OpeningTerm } from '../../models';
import { OpeningTermService } from '../../services';
import { Demand, DemandService } from '../../../demand';


@Component({
  selector: 'app-add-opening-term',
  templateUrl: './add-opening-term.component.html',
  styleUrls: ['./add-opening-term.component.css']
})
export class AddOpeningTermComponent implements OnInit {

  openingTerm: OpeningTerm;
  demands: Demand[];
  error: any;

  @Input() id: string;
  @Output() confirm = new EventEmitter();

  @ViewChild('openingTermFormCreate', { static: true }) openingTermFormCreate: NgForm;

  constructor(
    private openingTermService: OpeningTermService,
    private demandService: DemandService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.openingTerm = new OpeningTerm();

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

  public addOpeningTerm() {
    if (this.openingTermFormCreate.form.valid) {
      this.spinner.show('add-opening-term-spinner');
      this.openingTermService.addOpeningTerm(this.openingTerm).subscribe(
        res => {
          const successMessage = 'Termo de abertura criado com sucesso!';
          this.spinner.hide('add-opening-term-spinner');
          this.closeModal();
          this.confirm.emit({message: successMessage});
        },
        error => {
          // ganbiarra temporária, error.error is a array list?
          // o erro acontece pq está sendo mandada duas requisições iguais ao inves de uma
          if (error.status === 500) {
            const successMessage = 'Termo de abertura criado com sucesso!';
            this.spinner.hide('add-opening-term-spinner');
            this.closeModal();
            this.confirm.emit({message: successMessage});
          } else {
            this.spinner.hide('add-opening-term-spinner');
            this.error = error;
          }
        }
      );
    }
  }

  private closeModal(): void {
    $('body').removeAttr('style');
    $('body').removeClass('modal-open');
    $('#add-opening-term-modal').removeClass('show');
    $('div.modal-backdrop').remove('div.modal-backdrop');
    $('#add-opening-term-modal').removeAttr('style');
    $('#add-opening-term-modal').addClass('modal-close');
  }

}
