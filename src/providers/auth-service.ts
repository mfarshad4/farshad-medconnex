import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';

import { Storage } from '@ionic/storage';
 
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

    constructor(public storage: Storage, private http: Http) {
        
    }
    
  currentUser: User;

 
  public login(credentials) {
    
    if (credentials.phone === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    } else {
      return Observable.create(observer => {
        // At this point make a request to your backend to make a real check!
        var link = 'http://api.medconnex.net/public/app/login';
        var data = JSON.stringify({phone:credentials.phone, password:credentials.password});
        
        this.http.post(link, data)
        .subscribe(data => {
        
           let access = data.json().success;
           
           //get this users info object from the login
           let full_name = data.json().name ;
           let phone = data.json().phone ;
           let zip_code = data.json().zip_code ;
           
            this.currentUser = new User(full_name, phone, zip_code);
            
            //save the current user object in local storage..
            this.storage.set('user_name', full_name) ;
            this.storage.set('phone', phone) ;
            this.storage.set('zip_code', zip_code) ;
            
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
        var link = 'http://api.medconnex.net/public/app/register';
        var data = JSON.stringify({full_name: credentials.full_name, phone:credentials.phone, password:credentials.password, password_c: credentials.password_c, zip_code:credentials.zip_code});
        
        this.http.post(link, data).subscribe(result => {
           console.log(result);
        
        if(result.json().success){
           
           
          
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
  
  
  //continue using this service with other post requests so as to ease validating on the controller tier
  
  public reservation(credentials) {
    if (credentials.full_name === null || credentials.email === null || credentials.phone === null || credentials.date === null || credentials.time === null) {
      return Observable.throw("Please fill out all the fields");
    } else {
      // At this point store the credentials to your backend!
        var link = 'http://api.medconnex.net/public/app/reservation';
        var data = JSON.stringify({full_name: credentials.full_name, email:credentials.email, phone:credentials.phone, date:credentials.date, time : credentials.time});
        
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
  
  
  public updateProfile(credentials) {
    if (credentials.full_name === null || credentials.email === null || credentials.phone === null || credentials.about === null || credentials.gender === null || credentials.zip_code === null || credentials.city === null ) {
      return Observable.throw("Please fill out all the fields");
    } else {
      // At this point store the credentials to your backend!
        var link = 'http://api.medconnex.net/public/app/update-profile';
        var data = JSON.stringify({full_name: credentials.full_name, email:credentials.email, phone:credentials.phone, about:credentials.about, gender: credentials.gender, zip_code: credentials.zip_code, city: credentials.city});
        
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
  
  
  
  public checkout(credentials) {
    if (credentials.full_name === null || credentials.email === null || credentials.phone === null || credentials.address === null || credentials.special_instructions === null || credentials.product_info === null ) {
      return Observable.throw("Please fill out all the fields");
    } else {
      // At this point store the credentials to your backend!
        var link = 'http://api.medconnex.net/public/app/product-cart';
        var data = JSON.stringify({full_name: credentials.full_name, email:credentials.email, phone:credentials.phone, address:credentials.address, special_instructions: credentials.special_instructions, product_info: credentials.product_info});
        
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
  
  
  public shareProduct(credentials) {
    if (credentials === null) {
      return Observable.throw("You have not selected any friend");
    } else {
      // At this point store the credentials to your backend!
        var link = 'http://api.medconnex.net/public/app/share/product';
        var data = JSON.stringify(credentials);
        
        this.http.post(link, data)
        .subscribe(data => {
           console.log(data);
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
  
  
  public addToFavorites(credentials) {
    if (credentials === null) {
      return Observable.throw("You have not selected any product");
    } else {
      // At this point store the credentials to your backend!
        var link = 'http://api.medconnex.net/public/app/add/favorites';
        var data = JSON.stringify(credentials);
        
        this.http.post(link, data)
        .subscribe(data => {
           console.log(data);
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
  
}