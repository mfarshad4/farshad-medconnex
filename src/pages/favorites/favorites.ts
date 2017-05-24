import { Component, ElementRef, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav, NavController, PopoverController, ModalController} from 'ionic-angular';


import { OnlinePage } from '../online/online';

import { EditProfilePage } from '../edit-profile/edit-profile';

import { ReferralPage } from '../referral/referral';

import { DriversPage } from '../drivers/drivers';

import { CartPage } from '../cart/cart';

//import { FavoritesPage } from '../favorites/favorites';

import { NotificationsPage } from '../notifications/notifications';

import { FriendslistPage } from '../friends-list/friends-list';

import { Storage } from '@ionic/storage';

@Component({
  templateUrl: 'favorites.html'
})

export class FavoritesPage {
  isAndroid: boolean = false;
  
 itemsInCart: number = 0 ;
 
  constructor(public storage: Storage, public navCtrl: NavController, public popoverCtrl: PopoverController, public modalCtrl: ModalController) {
    
    this.storage.ready().then(() => {            
            
          this.storage.forEach( (value, key, index) => {
            
            this.itemsInCart = this.itemsInCart + 1 ;
            
          })   
       
     });
    
  }
  
   
  
  onlinePage() {
    // close the menu when clicking a link from the menu
    //this.menu.close();
    // navigate to the new page if it is not the current page
    this.navCtrl.push(OnlinePage);
    
  }
  
  editProfile() {
    this.navCtrl.push(EditProfilePage);
  }
  
  referral() { 
    this.navCtrl.push(ReferralPage);
  }
  
  cart() { 
    this.navCtrl.push(CartPage);
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
   
   //when a product is clicked from the favorites carousel , assume that user wants to share the product with their friends.
  shareWithFriends(id){
      let modal = this.modalCtrl.create(FriendslistPage, {product_id : id});
      modal.present();
  } 
    
}