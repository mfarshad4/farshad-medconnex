import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';
 
export class User {
  name: string;
  phone: string ;
  zipCode: string ;
 
  constructor(name: string, phone: string, zipCode: string) {
    this.name = name;
    this.phone = phone;
    this.zipCode = zipCode;
  }
}
 
@Injectable()
export class AuthService {

    constructor(private http: Http) {
        
    }
    
  currentUser: User;

 
  public login(credentials) {
    
    if (credentials.phone === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    } else {
      return Observable.create(observer => {
        // At this point make a request to your backend to make a real check!
        var link = 'http://localhost/server-backup/api/public/app/login';
        var data = JSON.stringify({phone:credentials.phone, password:credentials.password});
        
        this.http.post(link, data)
        .subscribe(data => {
          
           let access = data.json().success;
           
            this.currentUser = new User('Simon', '606-190-2345', '50009');
            observer.next(access);
            observer.complete();
          
        }, error => {
            console.log("Oooops!");
        });
        
        
      });
    }
  }
  
  
  
  public register(credentials) {
    if (credentials.phone === null || credentials.password === null || credentials.password_c === null || credentials.full_name === null || credentials.zip_code === null) {
      return Observable.throw("Please insert credentials");
    } else {
      // At this point store the credentials to your backend!
        var link = 'http://localhost/server-backup/api/public/app/register';
        var data = JSON.stringify({full_name: credentials.full_name, phone:credentials.phone, password:credentials.password, password_c: credentials.password_c, zip_code:credentials.zip_code});
        
        this.http.post(link, data)
        .subscribe(data => {
           console.log(data.json().success);
        if(data.json().success){
           
           
          
        }
          
        }, error => {
            console.log("Oooops!");
        });
      
      return Observable.create(observer => {
              observer.next(true);
              observer.complete();
          });
      
    }
  }
 
  public getUserInfo() : User {
    return this.currentUser;
  }
 
  public logout() {
    return Observable.create(observer => {
      this.currentUser = null;
      observer.next(true);
      observer.complete();
    });
  }
}