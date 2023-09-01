import { Component } from '@angular/core';
import {UserDataService} from './services/user-data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

//users: any;
export class AppComponent {
  title = 'register';
  // constructor(private userData: UserDataService){
  //   this.userData.users().subscribe((data) =>{
  //     this.users= data;
  //   });
  // }
}
