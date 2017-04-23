import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav, NavController, NavParams } from 'ionic-angular';


@Component({
  templateUrl: 'referral.html'
})
export class ReferralPage {
  isAndroid: boolean = false;
  @ViewChild(Nav) nav: Nav;
  referral: string = "referrals";

  constructor(platform: Platform, public menu: MenuController, public navCtrl: NavController) {
    this.isAndroid = platform.is('android');
    
  }
  
  openProductInfo() {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    //this.navCtrl.push(ProductInfoPage);
    
  }
}