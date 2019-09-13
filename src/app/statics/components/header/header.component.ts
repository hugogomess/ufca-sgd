import { Component, OnInit } from '@angular/core';
import { JwtService } from '../../../auth/services';
import { UserService } from '../../../user/services';
import { User } from 'src/app/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public user: User = new User();

  constructor(
    public jwtService: JwtService,
    public userService: UserService
  ) { }

  ngOnInit() {
    const user = this.jwtService.loggedUser;

    if (user !== null) {
      this.user.id = user.user_id;
      this.user.username = user.username;
    }
    //   this.userService.findById(this.user.id).subscribe(
    //     res => {
    //       this.user = res;
    //     },
    //   );
    // }
  }

  // public admPanelPermission(): boolean {
  //   if (this.user) {
  //     if (this.userService.isAdmin(this.user.id) ||
  //     this.userService.isProjectManager(this.user.id) ||
  //     this.userService.isDemandManager(this.user.id)) {
  //       return true;
  //     } else {
  //       return false;
  //     }
  //   }
  // }

}
