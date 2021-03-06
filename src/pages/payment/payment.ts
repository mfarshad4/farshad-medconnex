import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { PaymentInfoPage } from '../payment-info/payment-info';

/*
  Generated class for the Payment page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html'
})
export class PaymentPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentPage');
  }
  goPaymentInfo() {
      this.navCtrl.push(PaymentInfoPage);
  }

}
