import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  data:any=[
    {
      id:1,
      name:'Shingadiya Ravi',
      age: 21,
      city: 'Rajkot'
    },

    {
      id:2,
      name:'John Cena',
      age: 45,
      city: 'USA'
    },

    {
      id:3,
      name:'The Rock',
      age: 50,
      city: 'UK'
    },
  ];

  // This is used for the just test if API called. if true then user can access the route otherwise not
  activeStatus(){
    // If return true then user can access the contact route otherwise not...
    return false;
  }

  activeChildStatus(){

    // If return true then only user can access the about child routes other wise not...
    return false;
  }

  deActiveStatus(){

    // If return false then always ask to user you really want to go another routes .
    return true;
  }


}
