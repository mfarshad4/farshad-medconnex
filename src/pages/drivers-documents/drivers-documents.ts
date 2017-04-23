import { Component } from '@angular/core';

import { Platform, MenuController, Nav, NavController} from 'ionic-angular';

@Component({
  templateUrl: 'drivers-documents.html'
})
export class DriversDocumentsPage {
  isAndroid: boolean = false;
  drivers_documents: string = "upload";
  
 
  constructor(public navCtrl: NavController) {

  }
  
  
    
}