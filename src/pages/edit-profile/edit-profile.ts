import { Component} from '@angular/core';

import { NavController, LoadingController, PopoverController, AlertController} from 'ionic-angular';

import { OnlinePage } from '../online/online';

import { ReferralPage } from '../referral/referral';

import { DriversMapPage } from '../drivers-map/drivers-map';

import { CartPage } from '../cart/cart';

import { FavoritesPage } from '../favorites/favorites';

import { NotificationsPage } from '../notifications/notifications';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Storage } from '@ionic/storage';

import { AuthService } from '../../providers/auth-service';

@Component({
  selector: 'page-edit-profile',
  templateUrl: 'edit-profile.html'
})
export class EditProfilePage {
  //selectedItem: any;
  
  userData: any ;

  itemsInCart: number = 0 ;
  
  createSuccess = false;
  
  information = {phone: '', gender: '', about: '', full_name: '', zip_code: '', email: '', city: ''};
 
  constructor(public storage: Storage, public navCtrl: NavController, public http: Http, public loadingCtrl: LoadingController, public popoverCtrl: PopoverController, private auth: AuthService, private alertCtrl: AlertController) {
    // If we navigated to this page, we will have an item available as a nav param
    //this.selectedItem = navParams.get('item');
    
    this.userInfo() ; 
    
    this.storage.ready().then(() => {            
            
          this.storage.forEach( (value, key, index) => {
            
            this.itemsInCart = this.itemsInCart + 1 ;
            
          })   
       
     });
     
  }
  
  
  public updateProfile() {
  
  console.log(this.userData);
  
    this.auth.updateProfile(this.information).subscribe(success => {
      if (success) {
        this.createSuccess = true;
          this.showPopup("Success", "Your profile has been updated.");
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
  
  //List all the info previously entered by this user
  userInfo() {
  
      this.http.get('http://api.medconnex.net/public/edit-profile').map(res => res.json()).subscribe(data => {
        
        this.userData = data.user ;
        console.log(this.userData);

      });
  }
  
  
  
  onlinePage() {
    // close the menu when clicking a link from the menu
    //this.menu.close();
    // navigate to the new page if it is not the current page
    this.navCtrl.push(OnlinePage);
    
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
