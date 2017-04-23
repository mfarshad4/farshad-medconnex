import { Component} from '@angular/core';

import { NavController, LoadingController} from 'ionic-angular';

import { ReservationsPage } from '../reservations/reservations';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  templateUrl: 'industry-doctors.html'
})
export class IndustryDoctorsPage {
  isAndroid: boolean = false;
  
  doctors: any ;
  
  constructor(public navCtrl: NavController, public http: Http, public loadingCtrl: LoadingController) {
      this.listDoctors() ; 
  }
  
  //List all the industry doctors that have been approved
  listDoctors() {
      this.http.get('http://localhost/server-backup/api/public/industry-doctors').map(res => res.json()).subscribe(data => {
        
        this.doctors = data.data;
        console.log(data);

      });
  }
  
  //open complimetary advert modal for the doctor that was clicked upon. 
  openLoadingAdvert(doctorId) {
      let loading = this.loadingCtrl.create({
        spinner: 'hide',
        content: `
                    <img src="../../assets/complimentary_ad.jpg" />
                    <div>
                    <p>Complimentary advert for sure is really really good for business</p>
                    <p>Complimentary advert for sure is really really good for business</p>
                    <p>Complimentary advert for sure is really really good for business</p>
                    <p>Complimentary advert for sure is really really good for business</p>
                    </div>
                  `,
        duration: 5000
      });

      loading.onDidDismiss(() => {
        console.log('Dismissed loading');
        //redirect this fellow to the products page to browse through ..
        this.navCtrl.push(ReservationsPage, {doctorId : doctorId}) ;
      });

      loading.present();    
  }
  
 
  
    
}