import { Component, OnInit, OnDestroy, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Subject } from 'rxjs';

import { User } from '../../models';
import { UserService } from '../../services';
import { DataTableDirective } from 'angular-datatables';

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
    private userService: UserService
  ) { }

  ngOnInit() {
    this.dtOptions = {
      order: [],
      paging: true,
      pageLength: 10,
      stateSave: false,
      retrieve: true
    };
    this.findAllUsers();
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  private findAllUsers() {
    this.userService.findAll().subscribe(
      res => {
        this.users = res;
        this.render();
      },
      error => {
        this.error = error;
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
        // Destroy the table first
        dtInstance.destroy();
        // Call the dtTrigger to rerender again
        this.dtTrigger.next();
      });
    } else {
      this.dtTrigger.next();
    }
  }
}
