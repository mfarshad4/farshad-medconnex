import { Component } from '@angular/core';

import { NavController, ViewController } from 'ionic-angular';


@Component({
  templateUrl: 'product-info.html'
})

export class ProductInfoPage {

  constructor(public navCtrl: NavController, public viewCtrl: ViewController) {
    
    
  }
  
  dismiss() {
        this.viewCtrl.dismiss();
      }
  
}