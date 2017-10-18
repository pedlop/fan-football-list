import { AppService } from './app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  user: any;
  users: any;

  constructor (private appService: AppService) { }

  ngOnInit() {
    this.getUsers();
    this.getUser();
  }

  onClickRemoveUser(id) {
    this.appService.removeUser(id).subscribe(
      () => {
        console.log('User removed');
        this.getUsers();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  private getUser() {
    this.appService.getUserById('59e7ae809b8704a712f56305').subscribe(
      user => {
        this.user = user.data;
        console.log(this.user);
      }
    );
  }

  private getUsers() {
    this.appService.getUsers().subscribe(
      users => {
        console.log(users.data);
        this.users = users.data;
      }
    );
  }
}
