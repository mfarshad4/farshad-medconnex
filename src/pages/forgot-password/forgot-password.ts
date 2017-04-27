import { Component } from '@angular/core';

import { Platform, MenuController, Nav, NavController} from 'ionic-angular';

import { ResetPasswordPage } from '../reset-password/reset-password';

@Component({
  templateUrl: 'forgot-password.html'
})
export class ForgotPasswordPage {
  isAndroid: boolean = false;

  constructor(public navCtrl: NavController) {

  }
  
  enterCode(){
  	this.navCtrl.push(ResetPasswordPage);
  }
    
}