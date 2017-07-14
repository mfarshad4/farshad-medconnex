import { Component} from '@angular/core';

import { NavController, ViewController} from 'ionic-angular';

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
 
  constructor(public navCtrl: NavController, public viewCtrl: ViewController) {
    
    
     
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
