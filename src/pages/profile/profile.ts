import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav, NavController, NavParams,PopoverController } from 'ionic-angular';

import { OnlinePage } from '../online/online';

import { EditProfilePage } from '../edit-profile/edit-profile';

import { ReferralPage } from '../referral/referral';

import { DriversPage } from '../drivers/drivers';

import { FavoritesPage } from '../favorites/favorites';

import { CartPage } from '../cart/cart';

import { NotificationsPage } from '../notifications/notifications';

import { Storage } from '@ionic/storage';

@Component({
  templateUrl: 'profile.html'
})
export class ProfilePage {
  isAndroid: boolean = false;
  @ViewChild(Nav) nav: Nav;
  online: string = "following";
  
  itemsInCart: number = 0 ;

  constructor(public storage: Storage, platform: Platform, public menu: MenuController, public navCtrl: NavController,public popoverCtrl: PopoverController) {
    this.isAndroid = platform.is('android');
    
    this.storage.ready().then(() => {            
            
          this.storage.forEach( (value, key, index) => {
            
            this.itemsInCart = this.itemsInCart + 1 ;
            
          })   
       
     });
    
  }
  
  onlinePage() {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.navCtrl.push(OnlinePage);
    
  }
  
  editProfile() {
    this.navCtrl.push(EditProfilePage);
  }
  
  referral() { 
    this.navCtrl.push(ReferralPage);
  }
  
  drivers() {
    this.navCtrl.push(DriversPage);
  }
  
  cart() {
    this.navCtrl.push(CartPage);
  }
  
  favorites() {
    this.navCtrl.push(FavoritesPage);
  }
  
  notifications() {
    let popover = this.popoverCtrl.create(NotificationsPage);
    popover.present();
  }
  
}