import { Component } from '@angular/core';
import { Platform, MenuController, Nav, NavController} from 'ionic-angular';
import { NewPasswordPage } from '../new-password/new-password';


@Component({
  templateUrl: 'reset-password.html'
})
export class ResetPasswordPage {

  constructor(public navCtrl: NavController) {}

  newPassword(){
  	this.navCtrl.push(NewPasswordPage)
  }

}
