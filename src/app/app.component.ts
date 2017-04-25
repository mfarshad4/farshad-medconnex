import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { StatusBar, Splashscreen } from 'ionic-native';

import { ProductsPage } from '../pages/products/products';

import { CartPage } from '../pages/cart/cart';

import { OnlinePage } from '../pages/online/online';

import { ProfilePage } from '../pages/profile/profile';

import { StorefrontsPage } from '../pages/storefronts/storefronts';

import { IndustryDoctorsPage } from '../pages/industry-doctors/industry-doctors';

import { ReservationsPage } from '../pages/reservations/reservations';

import { DriversDocumentsPage } from '../pages/drivers-documents/drivers-documents';

import { LoginPage } from '../pages/login/login';

import { RegisterPage } from '../pages/register/register';

import { ForgotPasswordPage } from '../pages/forgot-password/forgot-password';

import { ResetPasswordPage } from '../pages/reset-password/reset-password';

import { NewPasswordPage } from '../pages/new-password/new-password';

import { TermsPage } from '../pages/terms/terms';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage: any = TermsPage;
  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public menu: MenuController
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Storefronts', component: StorefrontsPage },
      { title: 'Industry Doctors', component: IndustryDoctorsPage },
      { title: 'Reservations', component: ReservationsPage },
      { title: 'Products', component: ProductsPage },
      { title: 'Order / Cart', component: CartPage },
      { title: 'Online', component: OnlinePage },
      { title: 'My Profile', component: ProfilePage },
      { title: 'Legal Docs', component: CartPage },
      { title: 'Drivers Documents', component: DriversDocumentsPage },
      { title: 'Login', component: LoginPage },
      { title: 'Register', component: RegisterPage },
      { title: 'Forgot Password', component: ForgotPasswordPage },
      { title: 'Terms & Agreements', component: TermsPage },
      { title: 'Reset Password', component: ResetPasswordPage },
      { title: 'New Password', component: NewPasswordPage }
      
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

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}