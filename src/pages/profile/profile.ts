import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav, NavController, NavParams,PopoverController } from 'ionic-angular';

import { OnlinePage } from '../online/online';

import { EditProfilePage } from '../edit-profile/edit-profile';

import { ReferralPage } from '../referral/referral';

import { DriversPage } from '../drivers/drivers';

import { FavoritesPage } from '../favorites/favorites';

import { NotificationsPage } from '../notifications/notifications';

@Component({
  templateUrl: 'profile.html'
})
export class ProfilePage {
  isAndroid: boolean = false;
  @ViewChild(Nav) nav: Nav;
  online: string = "following";

  constructor(platform: Platform, public menu: MenuController, public navCtrl: NavController,public popoverCtrl: PopoverController) {
    this.isAndroid = platform.is('android');
    
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
  
  favorites() {
    this.navCtrl.push(FavoritesPage);
  }
  
  notifications() {
    let popover = this.popoverCtrl.create(NotificationsPage);
    popover.present();
  }
  
}