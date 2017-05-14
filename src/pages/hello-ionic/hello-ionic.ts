import { Component } from '@angular/core';

import { Platform, MenuController, Nav, NavController} from 'ionic-angular';

import { DriversPage } from '../drivers/drivers';

import { StorefrontsPage } from '../storefronts/storefronts';

import { IndustryDoctorsPage } from '../industry-doctors/industry-doctors';


@Component({
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {

  constructor(public navCtrl: NavController) {

  }
  
   
   goDrivers(){
  	  this.navCtrl.push(DriversPage)
   }
  
   goStorefronts(){
      this.navCtrl.push(StorefrontsPage)
   }
   
   goDoctor(){
      this.navCtrl.push(IndustryDoctorsPage)
   }
    
}

