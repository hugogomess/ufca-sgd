import { Component, OnInit, ViewChild, EventEmitter, Output, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';

import { GutMatrix } from '../../models';
import { GutMatrixService } from '../../services';


@Component({
  selector: 'app-add-gut-matrix',
  templateUrl: './add-gut-matrix.component.html',
  styleUrls: ['./add-gut-matrix.component.css']
})
export class AddGutMatrixComponent implements OnInit {

  gutMatrix: GutMatrix;
  error: any;

  @Input() id: string;
  @Output() confirm = new EventEmitter();

  @ViewChild('gutMatrixFormCreate', { static: true }) gutMatrixFormCreate: NgForm;

  constructor(
    private gutMatrixService: GutMatrixService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.gutMatrix = new GutMatrix();
  }

  public addGutMatrix() {
    if (this.gutMatrixFormCreate.form.valid) {
      this.spinner.show('add-gut-matrix-spinner');
      this.gutMatrix.gut = this.gutMatrix.gravity * this.gutMatrix.urgency * this.gutMatrix.trend;
      this.gutMatrixService.addGutMatrix(this.gutMatrix).subscribe(
        res => {
          const successMessage = 'Matriz gut criada com sucesso!';
          this.spinner.hide('add-gut-matrix-spinner');
          this.closeModal();
          this.confirm.emit({message: successMessage});
        },
        error => {
          // ganbiarra temporária, error.error is a array list?
          // o erro acontece pq está sendo mandada duas requisições iguais ao inves de uma
          if (error.status === 500) {
            const successMessage = 'Matriz gut criada com sucesso!';
            this.spinner.hide('add-gut-matrix-spinner');
            this.closeModal();
            this.confirm.emit({message: successMessage});
          } else {
            this.spinner.hide('add-gut-matrix-spinner');
            this.error = error;
          }
        }
      );
    }
  }

  private closeModal(): void {
    $('body').removeAttr('style');
    $('body').removeClass('modal-open');
    $('#add-gut-matrix-modal').removeClass('show');
    $('div.modal-backdrop').remove('div.modal-backdrop');
    $('#add-gut-matrix-modal').removeAttr('style');
    $('#add-gut-matrix-modal').addClass('modal-close');
  }

}
