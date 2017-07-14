import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, ModalController, Nav, NavController, NavParams, PopoverController } from 'ionic-angular';

import { OnlinePage } from '../online/online';

import { EditProfilePage } from '../edit-profile/edit-profile';

import { ReferralPage } from '../referral/referral';

import { DriversMapPage } from '../drivers-map/drivers-map';

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
  
  drivers() {
    this.navCtrl.push(DriversMapPage);
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