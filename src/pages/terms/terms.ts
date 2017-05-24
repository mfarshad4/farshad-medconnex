import { Component } from '@angular/core';

import { Platform, MenuController, Nav, NavController} from 'ionic-angular';

//import { StorefrontsPage } from '../storefronts/storefronts';

import { HelloIonicPage } from '../hello-ionic/hello-ionic';

@Component({
  templateUrl: 'terms.html'
})
export class TermsPage {
  isAndroid: boolean = false;

  constructor(public navCtrl: NavController) {

  }
  
  loginPage(){
  	this.navCtrl.setRoot(HelloIonicPage);
  }
    
}