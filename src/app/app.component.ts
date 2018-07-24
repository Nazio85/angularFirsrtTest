import {Component} from '@angular/core';
import {UserService} from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [UserService]
})
export class AppComponent {

  constructor(private userService: UserService) {
    this.userService.getUsers().subscribe(value => console.log(value));
    alert(this.userService.getUsers().subscribe(value => value.hasOwnProperty('gender')));
  }


}


