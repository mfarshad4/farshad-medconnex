import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
import { ProductsPage } from '../pages/products/products';
import { ProductInfoPage } from '../pages/product-info/product-info';
import { CartPage } from '../pages/cart/cart';
import { OnlinePage } from '../pages/online/online';
import { ProfilePage } from '../pages/profile/profile';
import { EditProfilePage } from '../pages/edit-profile/edit-profile';
import { ReferralPage } from '../pages/referral/referral';
import { DriversPage } from '../pages/drivers/drivers';
import { FavoritesPage } from '../pages/favorites/favorites';
import { NotificationsPage } from '../pages/notifications/notifications';
import { StorefrontsPage } from '../pages/storefronts/storefronts';
import { IndustryDoctorsPage } from '../pages/industry-doctors/industry-doctors';
import { ReservationsPage } from '../pages/reservations/reservations';
import { DriversDocumentsPage } from '../pages/drivers-documents/drivers-documents';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { ForgotPasswordPage } from '../pages/forgot-password/forgot-password';
import { TermsPage } from '../pages/terms/terms';
import { RatingsPage } from '../pages/ratings/ratings';

import { DriversReviews } from '../pages/drivers-reviews/drivers-reviews';
import { StoresReviews } from '../pages/stores-reviews/stores-reviews';
import { ComplimentaryAdverts } from '../pages/complimentary-adverts/complimentary-adverts';
import { PatientDocument } from '../pages/patient-document/patient-document';

import { ConnectivityService } from '../providers/connectivity-service';
import { ResetPasswordPage } from '../pages/reset-password/reset-password';
import { NewPasswordPage } from '../pages/new-password/new-password';
import { AuthService } from '../providers/auth-service';

// Import ionic2-rating module
import { Ionic2RatingModule } from 'ionic2-rating';


@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    ProductsPage,
    ProductInfoPage,
    CartPage,
    OnlinePage,
    ProfilePage,
    EditProfilePage,
    ReferralPage,
    DriversPage,
    FavoritesPage,
    NotificationsPage,
    StorefrontsPage,
    IndustryDoctorsPage,
    ReservationsPage,
    DriversDocumentsPage,
    LoginPage,
    RegisterPage,
    ForgotPasswordPage,
    TermsPage,
    RatingsPage,
    DriversReviews,
    StoresReviews,
    ComplimentaryAdverts,
    PatientDocument,
    ResetPasswordPage,
    NewPasswordPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    IonicModule.forRoot(MyApp,{tabsPlacement: 'bottom'}),
    Ionic2RatingModule // Put ionic2-rating module here
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    ProductsPage,
    ProductInfoPage,
    CartPage,
    OnlinePage,
    ProfilePage,
    EditProfilePage,
    ReferralPage,
    DriversPage,
    FavoritesPage,
    NotificationsPage,
    StorefrontsPage,
    IndustryDoctorsPage,
    ReservationsPage,
    DriversDocumentsPage,
    LoginPage,
    RegisterPage,
    ForgotPasswordPage,
    TermsPage,
    RatingsPage,
    DriversReviews,
    StoresReviews,
    ComplimentaryAdverts,
    PatientDocument,
    ResetPasswordPage,
    NewPasswordPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, ConnectivityService, AuthService]
})
export class AppModule {}
