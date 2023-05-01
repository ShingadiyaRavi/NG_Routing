import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent {

  userId:any;

  // This is used for the activated routed and get the id from that
  constructor(private route:ActivatedRoute){}

  // This is used for the get the id of activate routes in url...
  ngOnInit(){
    console.log("user id : "+this.route.snapshot.paramMap.get('id'));
    this.userId = this.route.snapshot.paramMap.get('id');
  }

}
