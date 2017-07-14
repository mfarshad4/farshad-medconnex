import { Component, ViewChild } from '@angular/core';

import {MenuController, Nav, PopoverController, NavController, NavParams } from 'ionic-angular';

import { EditProfilePage } from '../edit-profile/edit-profile';

import { ReferralPage } from '../referral/referral';

import { DriversMapPage } from '../drivers-map/drivers-map';

import { CartPage } from '../cart/cart';

import { FavoritesPage } from '../favorites/favorites';

import { NotificationsPage } from '../notifications/notifications';

import { Storage } from '@ionic/storage';

@Component({
  templateUrl: 'online.html'
})
export class OnlinePage {
  isAndroid: boolean = false;
  @ViewChild(Nav) nav: Nav;
  online: string = "following";
  
  itemsInCart: number = 0 ;
  
  constructor(public storage: Storage, public menu: MenuController, public navCtrl: NavController, public popoverCtrl: PopoverController) {
    
    this.storage.ready().then(() => {            
            
          this.storage.get("cart").then((val)=>{
              
              var itemsArray = JSON.parse(val);
              
              if(itemsArray != null){
                for(var i=0; i < itemsArray.length; i++ ){
                  
                  this.itemsInCart = this.itemsInCart + 1 ;
                  
                }
              
              }
          
          });   
       
     });
    
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
    this.navCtrl.push(DriversMapPage);
  }
  
  favorites() {
    this.navCtrl.push(FavoritesPage);
  }
  
  notifications() {
    let popover = this.popoverCtrl.create(NotificationsPage);
    popover.present();
  }
  
}