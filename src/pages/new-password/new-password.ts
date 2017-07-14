import { Component } from '@angular/core';

import {NavController} from 'ionic-angular';

import { LoginPage } from '../login/login'; 

@Component({
  templateUrl: 'new-password.html'
})
export class NewPasswordPage {

  constructor(public navCtrl: NavController) {

  }
  goToLogin() {
      this.navCtrl.push(LoginPage);
   }
    
}
