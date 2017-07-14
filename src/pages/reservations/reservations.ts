import { Component} from '@angular/core';

import { NavController, NavParams, PopoverController, AlertController } from 'ionic-angular';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


import { OnlinePage } from '../online/online';

import { EditProfilePage } from '../edit-profile/edit-profile';

import { ReferralPage } from '../referral/referral';

import { DriversMapPage } from '../drivers-map/drivers-map';

import { CartPage } from '../cart/cart';

import { FavoritesPage } from '../favorites/favorites';

import { NotificationsPage } from '../notifications/notifications';

import { Storage } from '@ionic/storage';

import { AuthService } from '../../providers/auth-service';

@Component({
  templateUrl: 'reservations.html'
})
export class ReservationsPage {
  isAndroid: boolean = false;
  reservations: string = "schedule";
  
  doctorInfo: any ;
  
  itemsInCart: number = 0 ;
  
  createSuccess = false;
  
  //get the data for when a user tries to make a reservation
  reservationCredentials = {full_name: '', email: '', phone: '', date: '', time: ''};
 
  constructor(public storage: Storage,public navCtrl: NavController, public navParams: NavParams, public http: Http, public popoverCtrl: PopoverController, private auth: AuthService, private alertCtrl: AlertController){
      
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
  
  
  public reservation() {
  
  console.log(this.reservationCredentials);
  
    this.auth.reservation(this.reservationCredentials).subscribe(success => {
      if (success) {
        this.createSuccess = true;
          this.showPopup("Success", "Reservation has been made.");
      } else {
        this.showPopup("Error", "Please check your details and try again");
      }
    },
    error => {
      this.showPopup("Error", error);
    });
  } 
 
  showPopup(title, text) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: text,
      buttons: [
       {
         text: 'OK',
         handler: data => {
           if (this.createSuccess) {
             this.navCtrl.popToRoot();
           }
         }
       }
     ]
    });
    alert.present();
  }
  
  //get the details of this particular doctor.. 
  doctorDeatils(){
      
      this.http.get('http://api.medconnex.net/public/doctor-info').map(res => res.json()).subscribe(data => {
        
        this.doctorInfo = data.data;
        console.log(data);

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