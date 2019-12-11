import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';

import { GutMatrix } from '../../models';
import { GutMatrixService } from '../../services';


@Component({
  selector: 'app-update-gut-matrix',
  templateUrl: './update-gut-matrix.component.html',
  styleUrls: ['./update-gut-matrix.component.css']
})
export class UpdateGutMatrixComponent implements OnInit {

  gutMatrix: GutMatrix;
  error: any;

  @Input() gutMatrixId: number;
  @Input() gutMatrixName: string;
  @Output() confirm = new EventEmitter();

  @ViewChild('gutMatrixFormUpdate', { static: true }) gutMatrixFormUpdate: NgForm;

  constructor(
    private gutMatrixService: GutMatrixService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.gutMatrix = new GutMatrix();
    this.spinner.show('update-gut-matrix-spinner-' + this.gutMatrixId);
    this.gutMatrixService.findById(this.gutMatrixId).subscribe(
      res => {
        this.spinner.hide('update-gut-matrix-spinner-' + this.gutMatrixId);
        this.gutMatrix = res;
      },
      error => {
        this.spinner.hide('update-gut-matrix-spinner-' + this.gutMatrixId);
        this.error = error; // TODO
      }
    );
  }

  public updateGutMatrix() {
    if (this.gutMatrixFormUpdate.form.valid) {
      this.spinner.show('update-gut-matrix-spinner-' + this.gutMatrixId);
      this.gutMatrix.gut = this.gutMatrix.gravity * this.gutMatrix.urgency * this.gutMatrix.trend;
      this.gutMatrixService.updateGutMatrix(this.gutMatrix).subscribe(
        success => {
          const successMessage = 'A Matriz GUT ' + this.gutMatrixName + ' foi atualizado com sucesso!';
          this.spinner.hide('update-gut-matrix-spinner-' + this.gutMatrixId);
          this.closeModal();
          this.confirm.emit({message: successMessage});
        },
        error => {
          this.spinner.hide('update-gut-matrix-spinner-' + this.gutMatrixId);
          this.error = error;
        }
      );
    }
  }

  private closeModal(): void {
    $('body').removeAttr('style');
    $('body').removeClass('modal-open');
    $('#update-' + this.gutMatrixId).removeClass('show');
    $('div.modal-backdrop').remove('div.modal-backdrop');
    $('#update-' + this.gutMatrixId).removeAttr('style');
    $('#update-' + this.gutMatrixId).addClass('modal-close');
  }

}
