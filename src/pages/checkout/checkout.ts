import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { PaymentPage } from '../payment/payment';

/*
  Generated class for the Checkout page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-checkout',
  templateUrl: 'checkout.html'
})
export class CheckoutPage {

  cartInfo: any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.cartInfo = navParams.get('information');
     
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CheckoutPage');
  }
  goPayment() {
      this.navCtrl.push(PaymentPage);
  }

}
