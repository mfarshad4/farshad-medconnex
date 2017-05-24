import { Component} from '@angular/core';

import { NavController, NavParams, LoadingController, PopoverController, AlertController} from 'ionic-angular';

import {LocalNotifications} from 'ionic-native';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { AuthService } from '../../providers/auth-service';

@Component({
  templateUrl: 'friends-list.html'
})
export class FriendslistPage {
  
  checkedItems:boolean[];
  
  product_id: any ;
  
  friends = [] ;

  checked = [] ;
  
  createSuccess = false;
 
  constructor(public navCtrl: NavController,public navParams: NavParams, public http: Http, public loadingCtrl: LoadingController, public popoverCtrl: PopoverController, private auth: AuthService, private alertCtrl: AlertController) {
    
    // If we navigated to this page, we will have the product_id available as a nav param
    this.product_id = navParams.get('product_id');
    
    this.getFriends() ;
    
        //when a user clicks the send button and shares product with friend(s)
        LocalNotifications.on("click", (notification, state) => {
            let alert = this.alertCtrl.create({
                title: "Notification Clicked",
                subTitle: "You just clicked the scheduled notification",
                buttons: ["OK"]
            });
            alert.present();
        });
     
  }
  
  //schedule local notification .. 
    public schedule() {
        LocalNotifications.schedule({
            title: "Test Title",
            text: "We can see local notification in action. You shared a product. COOOOOOOL!! ",
            at: new Date(new Date().getTime() + 5 * 1000),
            sound: null
        });
    }
  
  
  public shareProduct() {
  
    this.auth.shareProduct(this.checked).subscribe(success => {
      if (success) {
        this.createSuccess = true;
          this.showPopup("Success", "Product has been shared successfully.");
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
  
  //List all the friends that this user has..
  getFriends() {
  
      this.http.get('http://api.medconnex.net/public/app/friends').map(res => res.json()).subscribe(data => {
        
        this.friends = data.data ;
        
        console.log(this.friends);

      });
      
      this.checkedItems = new Array(this.friends.length);
  }
  
  
  send() { 
      
       console.log(this.checkedItems);
      
      //loop through all the items that have actually been checked and save their individual objects in checked array ..
      for(let i =0; i<this.checkedItems.length;i++){
          
          if(this.checkedItems[i] === true){
              this.checked.push(this.friends[i]);
          }
          
      }
      
      for(let i=0; i<this.checked.length; i++){
          
          this.checked[i].product_id = this.product_id ;
          
      }
      
      console.log(this.checked);
      
      this.shareProduct();
      
      this.schedule() ;
  }
  
  selectAll() { 
    
  }
  
  addFriends() {
    
  }
  
  close() {
    
  }
  
}
