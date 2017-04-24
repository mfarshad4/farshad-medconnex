import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, ModalController, Nav, NavController, NavParams } from 'ionic-angular';

import { ProductInfoPage } from '../product-info/product-info';

import { PatientDocument } from '../patient-document/patient-document';


@Component({
  templateUrl: 'products.html'
})
export class ProductsPage {
  pet: string = "puppies";
  isAndroid: boolean = false;
  @ViewChild(Nav) nav: Nav;

  constructor(platform: Platform, public menu: MenuController, public navCtrl: NavController, public modalCtrl: ModalController) {
    this.isAndroid = platform.is('android');
    
    setTimeout(() => {
        let modal = this.modalCtrl.create(PatientDocument);
        modal.present();
    }, 5000);
    
  }
  
  openProductInfo() {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.navCtrl.push(ProductInfoPage);
    
  }
}