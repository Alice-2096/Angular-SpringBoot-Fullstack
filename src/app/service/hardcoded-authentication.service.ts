import { Injectable } from '@angular/core';

//Injectable is what makes it a service, it makes this component available as dependency to be injected into other components
@Injectable({
  providedIn: 'root'
})

//this service provides authentication
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username : string, password : string) {
    //console.log('before ' + this.isUserLoggedIn());
    if(username==="alice" && password==="dummy") {
      // sessionStorage.setItem('authenticatedUser', username);
      //console.log('after ' + this.isUserLoggedIn());
      return true;
    } else {
      return false;
    }
  }
}
