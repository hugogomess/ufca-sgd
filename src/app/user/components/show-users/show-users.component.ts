import { Component, OnInit, ChangeDetectorRef, Input, OnChanges } from '@angular/core';
import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';

import { User } from '../../models';
import { UserService } from '../../services';

@Component({
  selector: 'app-show-users',
  templateUrl: './show-users.component.html',
  styleUrls: ['./show-users.component.css']
})
export class ShowUsersComponent implements OnInit {

  dataTable: any;
  error: any;
  users: User[];
  success: boolean;
  successMessage: string;

  constructor(
    private userService: UserService,
    private chRef: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.findAllUsers();
    this.instanceDataTable();
  }

  public instanceDataTable(): void {
    this.chRef.detectChanges();
    const table: any = $('table');
    this.dataTable = table.DataTable();
  }

  private findAllUsers() {
    this.userService.findAll().subscribe(
      res => this.users = res,
      error => {
        this.users = [];
        this.error = error;
      }
    );
  }

  public setSuccessAlert(message: string): void {
    this.closeAlert();
    this.ngOnInit();
    this.success = true;
    this.successMessage = message;
  }

  public closeAlert(): void {
    this.success = false;
    this.error = null;
  }
}
