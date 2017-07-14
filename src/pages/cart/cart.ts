import { Component, ViewChild } from '@angular/core';

import { NavController, NavParams, PopoverController, AlertController, ModalController } from 'ionic-angular';

import { Storage } from '@ionic/storage';
import { CheckoutPage } from '../checkout/checkout';

import { PromoCodePage } from '../promo-code/promo-code';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { AuthService } from '../../providers/auth-service';

@Component({
  templateUrl: 'cart.html'
})
export class CartPage {

  idens: Array<{id: any, product: any, amount: any}> = []; 
  
  itemsInCart: number = 0 ;
  
  createSuccess = false;
  
  itemExists = false ;
  
  information = {phone: '', email: '', address: '', special_instructions: '', full_name: '', product_info: this.idens};
  
  constructor(public storage: Storage, public navCtrl: NavController, public navParams: NavParams, public http: Http, public popoverCtrl: PopoverController, public modalCtrl: ModalController, private auth: AuthService, private alertCtrl: AlertController) {
    
        
        
      this.storage.ready().then(() => {
      
          this.storage.get("cart").then((val)=>{
              
              var itemsArray = JSON.parse(val);
              
              if(itemsArray != null){
                for(var i=0; i < itemsArray.length; i++ ){
                  
                  this.idens.push({ id:i , product: itemsArray[i], amount: 1 });
                  
                  this.itemsInCart = this.itemsInCart + 1 ;
                  
                }
              
              }
              
              if(this.itemsInCart > 0){
                  this.itemExists = true ;
              }
          
          });   
        
        console.log("IN Shopping cart : " + this.idens);
       
     });
    
    
  }
  
  
  public checkout() {
    this.auth.checkout(this.information).subscribe(success => {
      if (success) {
        this.createSuccess = true;
          this.showPopup("Success", "Items successfully received. Please proceed to payment.");
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
             this.navCtrl.setRoot(CheckoutPage, {information: this.idens});
           }
         }
       }
     ]
    });
    alert.present();
  }
  
  
  addPromoCode(){
      
      let modal = this.modalCtrl.create(PromoCodePage);
      
      modal.present();
      
  }
  
  
  increaseItem(productId) {
    
    for(let k = 0; k < this.idens.length; k++){
        
        if(this.idens[k].product == productId ){
            
            this.idens[k].amount = this.idens[k].amount + 1 ; 
        }
        
    }
    
  }
  
  decreaseItem(productId) {
    for(let k = 0; k < this.idens.length; k++){
        
        if(this.idens[k].product == productId && this.idens[k].amount > 1 ){
            
            this.idens[k].amount = this.idens[k].amount - 1 ; 
        }
        
    }
  }
  
  removeItem(productId) {
      
      this.storage.get("cart").then((val)=>{
          
          var parsedVal = JSON.parse(val);
          
          var culprit = parsedVal.indexOf(productId);
          
          if (culprit > -1) {
            parsedVal.splice(culprit, 1);
          }
          
          var unParsedVal = JSON.stringify(parsedVal);
          
          //if all the elements in the array have already been removed , then remove the entire cart .. 
          if(parsedVal.length == 0){
              this.storage.remove('cart');
          }else{
          
              this.storage.set("cart", unParsedVal);
          }
          this.navCtrl.setRoot(this.navCtrl.getActive().component);
      });
      
      
  }
  
  
  goCheckout() {
      this.navCtrl.push(CheckoutPage);
  }
  
}

