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
  error: boolean;
  users: User[];
  success: boolean;
  successMessage: string;
  errorMessage: any;

  constructor(
    private userService: UserService,
    private chRef: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.instanceDataTable();
  }

  public instanceDataTable(): void {
    this.userService.findAll().subscribe(
      (users: User[]) => {
        this.users = users;

        this.chRef.detectChanges();

        const table: any = $('table');
        this.dataTable = table.DataTable();
      },
      error => {
        this.error = true;
        this.errorMessage = error;
      }
    );
  }

  public setAlert(alertType: string, message: string): void {
    this.closeAlert();
    this.ngOnInit();
    if (alertType === 'success') {
      this.success = true;
      this.successMessage = message;
    } else if (alertType === 'error') {
      this.error = true;
      this.errorMessage = message;
    }
  }

  public closeAlert(): void {
    this.success = false;
    this.error = false;
  }
}
