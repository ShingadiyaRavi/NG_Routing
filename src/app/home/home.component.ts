import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {

  constructor(private route:ActivatedRoute){}

  apiData:any;

  ngOnInit(){
    // This is used for the get data from the resolver and used here and ['result'] means we pass the variable name into routes that name you need to here in array on data.
    this.apiData = this.route.snapshot.data['result'];
    console.log(this.apiData);
  }

}
