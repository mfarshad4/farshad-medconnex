import { Component} from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  templateUrl: 'reservations.html'
})
export class ReservationsPage {
  isAndroid: boolean = false;
  reservations: string = "schedule";
  
  doctorInfo: any ;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http){
      
  }
  
  //get the details of this particular doctor.. 
  doctorDeatils(){
      
      this.http.get('http://localhost/server-backup/api/public/doctor-info').map(res => res.json()).subscribe(data => {
        
        this.doctorInfo = data.data;
        console.log(data);

      });
      
  }
  
    
}