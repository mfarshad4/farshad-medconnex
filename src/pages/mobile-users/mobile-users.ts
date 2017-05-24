import { Component} from '@angular/core';

import { NavController, NavParams, LoadingController, PopoverController, AlertController, ViewController} from 'ionic-angular';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { AuthService } from '../../providers/auth-service';

@Component({
  templateUrl: 'mobile-users.html'
})

export class MobileUsersPage {
  
  createSuccess = false;
 
  constructor(public navCtrl: NavController,public navParams: NavParams, public http: Http, public loadingCtrl: LoadingController, public popoverCtrl: PopoverController, public viewCtrl: ViewController, private auth: AuthService, private alertCtrl: AlertController) {
    
    
     
  }
  
  
  mobileUsers(){
  
  }
  
  
  mobileProviders(){
  
  }
  
  dismiss() {
    this.viewCtrl.dismiss();
  }
  
}
