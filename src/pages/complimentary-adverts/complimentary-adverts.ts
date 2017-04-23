import { Component } from '@angular/core';
import { Platform, MenuController, Nav, NavController, ModalController, NavParams, ViewController} from 'ionic-angular';

@Component({
  template: `
<ion-header>
  <ion-toolbar>
    <ion-buttons start>
      <button ion-button (click)="dismiss()">
        <span ion-text color="primary" showWhen="ios">Cancel</span>
        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>
        <ion-icon name="md-close"></ion-icon>
      </button>
    </ion-buttons>
  </ion-toolbar>
</ion-header>
<ion-content>
  
  <div>
  
       
  
  </div>
  
  
</ion-content>
`
})

export class ComplimentaryAdverts {
  
  advert ;

  constructor(public platform: Platform, public params: NavParams, public viewCtrl: ViewController)
  {
    
    this.advert = this.params.get('advert');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
  
  onModelChange($event){
  
  }
  
}