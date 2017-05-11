import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ConfirmationPage } from '../confirmation/confirmation';

/*
  Generated class for the PaymentInfo page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-payment-info',
  templateUrl: 'payment-info.html'
})
export class PaymentInfoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentInfoPage');
  }
  
  confirmation() {
      this.navCtrl.push(ConfirmationPage);
  }

}
