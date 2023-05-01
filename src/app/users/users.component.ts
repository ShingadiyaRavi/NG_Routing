import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  users=[
    {id:1,name:'shingadiya Ravi',city:'Rajkot'},
    {id:2,name:'Sudani Vivek',city:'Amreli'},
    {id:3,name:'Godhani Kishan',city:'Kutiyana'},
    {id:4,name:'abcd xyz',city:'a-z'},
  ]


}
