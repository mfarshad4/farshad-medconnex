import { Component} from '@angular/core';

import { NavController, LoadingController, PopoverController} from 'ionic-angular';

import { ReservationsPage } from '../reservations/reservations';

import { OnlinePage } from '../online/online';

import { EditProfilePage } from '../edit-profile/edit-profile';

import { ReferralPage } from '../referral/referral';

import { DriversMapPage } from '../drivers-map/drivers-map';

import { CartPage } from '../cart/cart';

import { FavoritesPage } from '../favorites/favorites';

import { NotificationsPage } from '../notifications/notifications';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Storage } from '@ionic/storage';

@Component({
  templateUrl: 'industry-doctors.html'
})
export class IndustryDoctorsPage {
  isAndroid: boolean = false;
  
  doctors: any ;
  
  itemsInCart: number = 0 ;
 
  constructor(public storage: Storage, public navCtrl: NavController, public http: Http, public loadingCtrl: LoadingController, public popoverCtrl: PopoverController) {
      this.listDoctors() ;
      
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
  
  //List all the industry doctors that have been approved
  listDoctors() {
      this.http.get('http://api.medconnex.net/public/industry-doctors').map(res => res.json()).subscribe(data => {
        
        this.doctors = data.data;
        console.log(data);

      });
  }
  
  //open complimetary advert modal for the doctor that was clicked upon. 
  openLoadingAdvert(doctorId) {
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
        this.navCtrl.push(ReservationsPage, {doctorId : doctorId}) ;
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
  
  favorites() {
    this.navCtrl.push(FavoritesPage);
  }
  
  notifications() {
    let popover = this.popoverCtrl.create(NotificationsPage);
    popover.present();
  }
    
}