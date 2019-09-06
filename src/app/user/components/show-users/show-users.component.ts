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
export class ShowUsersComponent implements OnInit, OnChanges {

  dataTable: any;
  errors: any;
  dtOptions: any = {};

  @Input()users: User[];

  constructor(
    private userService: UserService,
    private chRef: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.dtOptions = {
      data: [],
      pagingType: 'full_numbers',
      pageLength: 2,
      responsive: true,
    };
    this.instanceDataTable();
  }

  ngOnChanges() {
    if (this.users) {
      this.dtOptions.data = this.users;
    }
  }

  public instanceDataTable(): void {
    this.userService.findAll().subscribe(
      (users: User[]) => {
        this.users = users;

        this.chRef.detectChanges();

        const table: any = $('table');
        this.dataTable = table.DataTable();

        console.log(this.users);
      },
      error => {
        this.errors = error;
        console.log(this.errors);
      }
    );
  }
}
