import { Component } from '@angular/core';

import { NavController, ModalController, NavParams, ViewController, LoadingController, PopoverController} from 'ionic-angular';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { DriversReviews } from '../drivers-reviews/drivers-reviews';

import { ProductsPage } from '../products/products';

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
  templateUrl: 'drivers-listing.html'
})
export class DriversListingPage {

  itemsInCart: number = 0 ;
 
  constructor(public storage: Storage, public navCtrl: NavController, public http: Http, public modalCtrl: ModalController, public loadingCtrl: LoadingController,public popoverCtrl: PopoverController) {
    
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
  
  //open ratings and reviews modal for driver
  openModal(driver) {

    let modal = this.modalCtrl.create(DriversReviews, driver);
    modal.present();
  }
  
  //open complimetary advert modal for driver
  openAdvert(record) {
      let modal = this.modalCtrl.create(ComplimentaryAdverts,{advert:record});
        modal.present();    
  }
  
  //open complimetary advert modal for driver
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
  
  listings() {
    this.navCtrl.push(DriversListingPage);
  }
  
  favorites() {
    this.navCtrl.push(FavoritesPage);
  }
  
  notifications() {
    let popover = this.popoverCtrl.create(NotificationsPage);
    popover.present();
  }
    
}