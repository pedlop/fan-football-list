import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { User } from '../shared/user';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user: any;
  users: any;

  newUser: User;

  constructor (private userService: UserService) {
    this.newUser = new User();
  }

  ngOnInit() {
    this.getUsers();
    this.getUser();
  }

  onClickRemoveUser(id) {
    this.userService.remove(id).subscribe(
      () => {
        console.log('User removed');
        this.getUsers();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  onClickAddUser() {
    this.newUser.age = 25;
    this.newUser.name = 'ZEE';
    this.newUser.team = 'PSG';
    this.userService.create(this.newUser).subscribe(
      data => {
        console.log(data);
        this.getUsers();
      }
    );
  }

  private getUser() {
    this.userService.findById('59e7ae809b8704a712f56305').subscribe(
      user => {
        this.user = user.data;
        console.log(this.user);
      }
    );
  }

  private getUsers() {
    this.userService.getAll().subscribe(
      users => {
        console.log(users.data);
        this.users = users.data;
      }
    );
  }

}
