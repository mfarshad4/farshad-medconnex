import { Component} from '@angular/core';

import { Platform, MenuController, Nav, NavController, ModalController, NavParams, ViewController, LoadingController, PopoverController} from 'ionic-angular';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { StoresReviews } from '../stores-reviews/stores-reviews';

import { ProductsPage } from '../products/products';

import { StoreMapPage } from '../store-map/store-map';

import { RatingsPage } from '../ratings/ratings';

import { ComplimentaryAdverts } from '../complimentary-adverts/complimentary-adverts';


import { OnlinePage } from '../online/online';

import { EditProfilePage } from '../edit-profile/edit-profile';

import { ReferralPage } from '../referral/referral';

import { DriversMapPage } from '../drivers-map/drivers-map';

import { CartPage } from '../cart/cart';

import { FavoritesPage } from '../favorites/favorites';

import { NotificationsPage } from '../notifications/notifications';

import { Storage } from '@ionic/storage';


@Component({
  templateUrl: 'store-listing.html'
})
export class StoreListingPage {
  
  
  itemsInCart: number = 0 ;
 
  constructor(public storage: Storage, public navCtrl: NavController, public http: Http, public modalCtrl: ModalController, public loadingCtrl: LoadingController, public popoverCtrl: PopoverController) {
    
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
  
  
  //open ratings and reviews page for storefronts
  openRatings(store) {
    // navigate to the ratings page
    this.navCtrl.push(RatingsPage,{store:store}) ;

  }
  
  //open complimetary advert modal for storefront
  openAdvert(record) {
      let modal = this.modalCtrl.create(ComplimentaryAdverts,{advert:record});
        modal.present();    
  }
  
  //open complimetary advert modal for storefront
  openLoadingAdvert() {
      let loading = this.loadingCtrl.create({
        spinner: 'hide',
        content: `
                    <img src="../../assets/complimentary_ad.jpg" />
                    <div>
                    <p>Complimentary advert for sure is really really good for business</p>
                    <p>Complimentary advert for sure is really really good for business</p>
                    <p>Complimentary advert for sure is really really good for business</p>
                    <p>Complimentary advert for sure is really really good for business</p>
                    </div>
                  `,
        duration: 5000
      });

      loading.onDidDismiss(() => {
        console.log('Dismissed loading');
        //redirect this fellow to the products page to browse through ..
        this.navCtrl.push(ProductsPage) ;
      });

      loading.present();    
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
    this.navCtrl.push(DriversMapPage);
  }
  
  store() {
    this.navCtrl.push(StoreMapPage);
  }
  
  listings() {
    this.navCtrl.push(StoreListingPage);
  }
  
  favorites() {
    this.navCtrl.push(FavoritesPage);
  }
  
  notifications() {
    let popover = this.popoverCtrl.create(NotificationsPage);
    popover.present();
  }
    
}