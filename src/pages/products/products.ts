import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, ModalController, Nav, NavController, NavParams } from 'ionic-angular';

import { ProductInfoPage } from '../product-info/product-info';

import { PatientDocument } from '../patient-document/patient-document';

import { SativaPage } from '../products-sativa/products-sativa';
import { IndicaPage } from '../products-indica/products-indica';
import { HybridPage } from '../products-hybrid/products-hybrid';

@Component({
  templateUrl: 'products.html',
})
export class ProductsPage {
  isAndroid: boolean = false;
  
  sativa: any;
  indica: any;
  hybrid: any;

  constructor(platform: Platform, public menu: MenuController, public navCtrl: NavController, public modalCtrl: ModalController) {
    
    this.sativa = SativaPage ;
    this.indica = IndicaPage ;
    this.hybrid = HybridPage ;
    
    setTimeout(() => {
        let modal = this.modalCtrl.create(PatientDocument);
        modal.present();
    }, 5000);
    
    
    
  }
  
  
}