import { Component } from '@angular/core';

import { Platform, MenuController, Nav, NavController} from 'ionic-angular';

import { DriversMapPage } from '../drivers-map/drivers-map';

import { StoreListingPage } from '../store-listing/store-listing';

import { IndustryDoctorsPage } from '../industry-doctors/industry-doctors';


@Component({
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {

  constructor(public navCtrl: NavController) {

  }
  
   
   goDrivers(){
  	  this.navCtrl.setRoot(DriversMapPage);
   }
  
   goStorefronts(){
      this.navCtrl.setRoot(StoreListingPage);
   }
   
   goDoctor(){
      this.navCtrl.setRoot(IndustryDoctorsPage);
   }
    
}