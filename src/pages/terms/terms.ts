import { Component } from '@angular/core';

import { Platform, MenuController, Nav, NavController} from 'ionic-angular';

import { LoginPage } from '../login/login';

@Component({
  templateUrl: 'terms.html'
})
export class TermsPage {
  isAndroid: boolean = false;

  constructor(public navCtrl: NavController) {

  }
  
  loginPage(){
  	this.navCtrl.push(LoginPage);
  }
    
}