import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav, NavController, NavParams } from 'ionic-angular';


@Component({
  templateUrl: 'online.html'
})
export class OnlinePage {
  isAndroid: boolean = false;
  @ViewChild(Nav) nav: Nav;
  online: string = "following";

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