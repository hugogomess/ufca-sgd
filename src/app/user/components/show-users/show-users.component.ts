import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';
import { DataTableDirective } from 'angular-datatables';

import { User } from '../../models';
import { UserService } from '../../services';
import { ptBrDataTable } from '../../../utils';

@Component({
  selector: 'app-show-users',
  templateUrl: './show-users.component.html',
  styleUrls: ['./show-users.component.css']
})
export class ShowUsersComponent implements OnInit, OnDestroy {

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  error: any;
  users: User[] = [];
  success: boolean;
  successMessage: string;

  @ViewChild(DataTableDirective, {static: false})
  dtElement: DataTableDirective;

  constructor(
    private userService: UserService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.dtOptions = {
      order: [],
      paging: true,
      pageLength: 10,
      stateSave: false,
      retrieve: true,
      language: ptBrDataTable('usuário', 'usuários', 'M')
    };
    this.findAllUsers();
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  private findAllUsers() {
    this.spinner.show('datatable-spinner');
    this.userService.findAll().subscribe(
      res => {
        this.users = res;
        this.render();
        this.spinner.hide('datatable-spinner');
      },
      error => {
        this.error = error;
        this.users = [];
        this.render();
        this.spinner.hide('datatable-spinner');
      }
    );
  }

  public setSuccessAlert(message: string): void {
    this.closeAlert();
    this.findAllUsers();
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
