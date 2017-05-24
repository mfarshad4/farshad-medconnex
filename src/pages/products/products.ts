import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, ModalController, Nav, NavController, NavParams, PopoverController } from 'ionic-angular';

import { OnlinePage } from '../online/online';

import { EditProfilePage } from '../edit-profile/edit-profile';

import { ReferralPage } from '../referral/referral';

import { DriversPage } from '../drivers/drivers';

import { FavoritesPage } from '../favorites/favorites';

import { CartPage } from '../cart/cart';

import { NotificationsPage } from '../notifications/notifications';

import { ProductInfoPage } from '../product-info/product-info';

import { PatientDocument } from '../patient-document/patient-document';

import { SativaPage } from '../products-sativa/products-sativa';
import { IndicaPage } from '../products-indica/products-indica';
import { HybridPage } from '../products-hybrid/products-hybrid';

import { Storage } from '@ionic/storage';

@Component({
  templateUrl: 'products.html',
})
export class ProductsPage {
  isAndroid: boolean = false;
  
  sativa: any;
  indica: any;
  hybrid: any;
  
  itemsInCart: number = 0 ;

  constructor(public storage: Storage, public menu: MenuController, public navCtrl: NavController, public modalCtrl: ModalController,public popoverCtrl: PopoverController) {
    
    this.sativa = SativaPage ;
    this.indica = IndicaPage ;
    this.hybrid = HybridPage ;
    
    setTimeout(() => {
        let modal = this.modalCtrl.create(PatientDocument);
        modal.present();
    }, 5000);
    
    
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