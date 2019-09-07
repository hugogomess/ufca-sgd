import { Component, OnInit, Input, Output } from '@angular/core';
import { UserService } from '../../services';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {

  @Input() id: number;
  @Input() username: string;
  @Input() firstName: string;
  @Input() lastName: string;
  // @Output() onConfirm: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    userService: UserService
  ) { }

  ngOnInit() {
  }

  // public deleteUser(id: number) {
  //   this.onConfirm.emit();
  // }

}
