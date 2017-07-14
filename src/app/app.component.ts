import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav, LoadingController  } from 'ionic-angular';

import { StatusBar, Splashscreen } from 'ionic-native';

import { Storage } from '@ionic/storage';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';

import { ProductsPage } from '../pages/products/products';

import { CartPage } from '../pages/cart/cart';

import { OnlinePage } from '../pages/online/online';

import { ProfilePage } from '../pages/profile/profile';

import { ReservationsPage } from '../pages/reservations/reservations';

import { DriversDocumentsPage } from '../pages/drivers-documents/drivers-documents';

import { LoginPage } from '../pages/login/login';

import { RegisterPage } from '../pages/register/register';


import { TermsPage } from '../pages/terms/terms';

import { IndustryDoctorsPage } from '../pages/industry-doctors/industry-doctors';

import { CheckoutPage } from '../pages/checkout/checkout';

import { PaymentPage } from '../pages/payment/payment';

import { PaymentInfoPage } from '../pages/payment-info/payment-info';

import { ConfirmationPage } from '../pages/confirmation/confirmation';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  
  loading: any;
  userName: any;
  phone: any;
  zipCode: any;
  

  // make HelloIonicPage the root (or first) page
  rootPage: any = LoginPage ;
  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public menu: MenuController, public storage: Storage, private loadingCtrl: LoadingController) {
    
    //get this users full name.
    this.storage.get('user_name').then((val)=> {
        this.userName = val ;
    });
    
    //get this users phone.
    this.storage.get('phone').then((val)=> {
        this.phone = val ;
    });
    
    //get this users zip code.
    this.storage.get('zip_code').then((val)=> {
        this.zipCode = val ;
    });
    
    this.showLoading();
    
    //check if this user is logged in.
    this.storage.get('user').then((val)=> {
        if(val){
            this.rootPage = TermsPage ;
            
        }else{
            this.rootPage = LoginPage ;
        }
        
        this.loading.dismiss();
    });
    
  
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Providers', component: HelloIonicPage },
      { title: 'Products', component: ProductsPage },
      { title: 'Industry Doctors', component: IndustryDoctorsPage },
      { title: 'Reservations', component: ReservationsPage },
      { title: 'Order / Cart', component: CartPage },
      { title: 'Online', component: OnlinePage },
      { title: 'My Profile', component: ProfilePage },
      { title: 'Legal Docs', component: CartPage },
      { title: 'Drivers Documents', component: DriversDocumentsPage },
      { title: 'Login', component: LoginPage },
      { title: 'Register', component: RegisterPage },
      { title: 'Checkout', component: CheckoutPage },
      { title: 'Payment Method', component: PaymentPage },
      { title: 'Payment Info', component: PaymentInfoPage },
      { title: 'Confirmation', component: ConfirmationPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
  
  
  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Authenticating...'
    });
    this.loading.present();
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }


}

