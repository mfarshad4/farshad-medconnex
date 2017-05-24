import { Component} from '@angular/core';

import { NavController, NavParams, LoadingController, PopoverController, AlertController, ViewController} from 'ionic-angular';

import { MobileUsersPage } from '../mobile-users/mobile-users';
import { MobileProvidersPage } from '../mobile-providers/mobile-providers';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { AuthService } from '../../providers/auth-service';

@Component({
  templateUrl: 'promo-code.html'
})

export class PromoCodePage {
  
  createSuccess = false;
 
  constructor(public navCtrl: NavController,public navParams: NavParams, public http: Http, public loadingCtrl: LoadingController, public popoverCtrl: PopoverController, public viewCtrl: ViewController, private auth: AuthService, private alertCtrl: AlertController) {
    
    
     
  }
  
  
  mobileUsers(){
      this.navCtrl.push(MobileUsersPage);
  }
  
  
  mobileProviders(){
      this.navCtrl.push(MobileProvidersPage);
  }
  
  dismiss() {
    this.viewCtrl.dismiss();
  }
  
}
