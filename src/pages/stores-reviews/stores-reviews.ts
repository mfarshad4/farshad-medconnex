import { Component } from '@angular/core';
import { Platform, MenuController, Nav, NavController, ModalController, NavParams, ViewController} from 'ionic-angular';

@Component({
  template: `
<ion-header>
  <ion-toolbar>
    <ion-title>
      Rate {{store}}
    </ion-title>
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
      <h4>Customer Service</h4>
      <rating [(ngModel)]="service" readOnly="false" (ngModelChange)="onModelChange($event)">
      </rating>
  
  </div>
  
  <div>
      <h4>Delivery Time</h4>
      <rating [(ngModel)]="delivery" readOnly="false" (ngModelChange)="onModelChange($event)">
      </rating>
  
  </div>
  
  <div>
      
      <ion-textarea placeholder="Comment">
          
      </ion-textarea>
      
  </div>
  
  <div>
      <button ion-button icon-left color="danger" small>
           Submit
      </button>
  </div>
  
</ion-content>
`
})

export class StoresReviews {
  
  stores ;

  constructor(public platform: Platform, public params: NavParams, public viewCtrl: ViewController)
  {
    
    this.stores = this.params.get('store');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
  
  onModelChange($event){
  
  }
  
}