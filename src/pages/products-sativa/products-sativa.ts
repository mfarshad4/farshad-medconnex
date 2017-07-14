import { Component} from '@angular/core';

import { NavController, NavParams, ModalController, PopoverController, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { ProductsPage } from '../products/products';
import { ProductInfoPage } from '../product-info/product-info';

import { FriendslistPage } from '../friends-list/friends-list';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { AuthService } from '../../providers/auth-service';

@Component({
  templateUrl: 'products-sativa.html'
})
export class SativaPage {
  
  sativa_products: string = "flowers";
  
  createSuccess = false;

  constructor(public storage: Storage, public navCtrl: NavController, public modalCtrl: ModalController, public http: Http, public popoverCtrl: PopoverController, private auth: AuthService, private alertCtrl: AlertController) {
      
      //here I will want to look into the database for the actual products that exist on the system as well as
      //check if any oth this products have been already marked as favorite .. 
      
  }
  
  openProductInfo() {
     //this.navCtrl.pop();
    // navigate to the new page if it is not the current page
    //this.navCtrl.push(ProductInfoPage);
    
    let modal = this.modalCtrl.create(ProductInfoPage);
    modal.present() ; 
  }
  
  addToCart(id){
      
      this.storage.ready().then(() => {
          
        //this.storage.clear();
          
        this.storage.get('cart').then((val) => {
            
            if(val != null){
                var itemsInArray = JSON.parse(val);
            
                itemsInArray.push(id);
                
                var parsedItem = JSON.stringify(itemsInArray);
                
  //if this item does not already exist in the cart ..... Maybe allowing users to add a product severally to cart is not a bad idea afterall
                //if(itemsInArray.indexOf(id) < 0){
                    this.storage.set("cart",parsedItem);
                //}
                
            }else{
                //create a new cart array ... 
                var itemation = [] ;
                itemation.push(id);
                
                var parsedItemation = JSON.stringify(itemation);
                
                this.storage.set("cart", parsedItemation) ;
            }
        });
          
        
        this.storage.length().then(result =>{
                console.log('LENGTH::: '+ result);
            });
            
            
          this.storage.forEach( (value, key, index) => {
	          console.log("This is the value", value)
	          console.log("from the key", key)
	          console.log("Index is", index)
          })   
        
        
        
       // set a key/value
      // this.storage.set(id , id);

       // Or to get a key/value pair
       this.storage.get(id).then((val) => {
         console.log('Product ID is', val);
       })
       
       
     });
      
  }
  
   //when a product is clicked from the favorites carousel , assume that user wants to share the product with their friends.
  shareWithFriends(id){
      let modal = this.modalCtrl.create(FriendslistPage, {product_id : id});
      modal.present();
  }
  
  
  //when a product is clicked from the favorites carousel , assume that user wants to share the product with their friends.
  addToFavorites(id){
      
    this.auth.addToFavorites({ product_id : id }).subscribe(success => {
      if (success) {
        this.createSuccess = true;
          this.showPopup("Success", "Item has been saved to favorites.");
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
             //this.navCtrl.setRoot(ProductsPage);
           }
         }
       }
     ]
    });
    alert.present();
  }
  
}
