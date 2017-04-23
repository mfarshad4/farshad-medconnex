import { Component} from '@angular/core';

import { NavController, NavParams, ModalController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { ProductsPage } from '../products/products';
import { ProductInfoPage } from '../product-info/product-info';



@Component({
  templateUrl: 'products-sativa.html'
})
export class SativaPage {
  
  sativa_products: string = "flowers";
  
  thedata : any;

  constructor(public storage: Storage, public navCtrl: NavController, public modalCtrl: ModalController) {
      
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
        
        this.storage.length().then(result =>{
                this.thedata = result;
                console.log('LENGTH::: '+ this.thedata);
            });
            
            
          this.storage.forEach( (value, key, index) => {
	          console.log("This is the value", value)
	          console.log("from the key", key)
	          console.log("Index is", index)
          })   
        
        
        
       // set a key/value
       //this.storage.set(id , id);

       // Or to get a key/value pair
       this.storage.get(id).then((val) => {
         console.log('Product ID is', val);
       })
       
       
     });
      
  }
  
}
