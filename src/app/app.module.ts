import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Geolocation } from '@ionic-native/geolocation';
import { Transfer } from '@ionic-native/transfer';
import { File } from '@ionic-native/file';
import { MyApp } from './app.component';
import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
import { ProductsPage } from '../pages/products/products';
import { ProductInfoPage } from '../pages/product-info/product-info';
import { CartPage } from '../pages/cart/cart';
import { PromoCodePage } from '../pages/promo-code/promo-code';
import { MobileUsersPage } from '../pages/mobile-users/mobile-users';
import { MobileProvidersPage } from '../pages/mobile-providers/mobile-providers';
import { OnlinePage } from '../pages/online/online';
import { ProfilePage } from '../pages/profile/profile';
import { EditProfilePage } from '../pages/edit-profile/edit-profile';
import { ReferralPage } from '../pages/referral/referral';

import { DriversMapPage } from '../pages/drivers-map/drivers-map';
import { DriversListingPage } from '../pages/drivers-listing/drivers-listing';

import { FavoritesPage } from '../pages/favorites/favorites';
import { NotificationsPage } from '../pages/notifications/notifications';

import { StoreMapPage } from '../pages/store-map/store-map';
import { StoreListingPage } from '../pages/store-listing/store-listing';

import { IndustryDoctorsPage } from '../pages/industry-doctors/industry-doctors';
import { ReservationsPage } from '../pages/reservations/reservations';
import { DriversDocumentsPage } from '../pages/drivers-documents/drivers-documents';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { ForgotPasswordPage } from '../pages/forgot-password/forgot-password';
import { TermsPage } from '../pages/terms/terms';
import { RatingsPage } from '../pages/ratings/ratings';
import { FriendslistPage } from '../pages/friends-list/friends-list';

import { SativaPage } from '../pages/products-sativa/products-sativa';
import { IndicaPage } from '../pages/products-indica/products-indica';
import { HybridPage } from '../pages/products-hybrid/products-hybrid';


import { DriversReviews } from '../pages/drivers-reviews/drivers-reviews';
import { StoresReviews } from '../pages/stores-reviews/stores-reviews';
import { ComplimentaryAdverts } from '../pages/complimentary-adverts/complimentary-adverts';
import { PatientDocument } from '../pages/patient-document/patient-document';

import { ConnectivityService } from '../providers/connectivity-service';
import { ResetPasswordPage } from '../pages/reset-password/reset-password';
import { NewPasswordPage } from '../pages/new-password/new-password';
import { AuthService } from '../providers/auth-service';
import { CheckoutPage } from '../pages/checkout/checkout';
import { PaymentPage } from '../pages/payment/payment';
import { PaymentInfoPage } from '../pages/payment-info/payment-info';
import { ConfirmationPage } from '../pages/confirmation/confirmation';

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
    PromoCodePage,
    MobileUsersPage,
    MobileProvidersPage,
    OnlinePage,
    ProfilePage,
    EditProfilePage,
    ReferralPage,
    DriversMapPage,
    DriversListingPage,
    FavoritesPage,
    NotificationsPage,
    StoreMapPage,
    StoreListingPage,
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
    SativaPage,
    IndicaPage,
    HybridPage,
    ResetPasswordPage,
    NewPasswordPage,
    CheckoutPage,
    PaymentPage,
    PaymentInfoPage,
    ConfirmationPage,
    FriendslistPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    Ionic2RatingModule
    
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
    PromoCodePage,
    MobileUsersPage,
    MobileProvidersPage,
    OnlinePage,
    ProfilePage,
    EditProfilePage,
    ReferralPage,
    DriversMapPage,
    DriversListingPage,
    FavoritesPage,
    NotificationsPage,
    StoreMapPage,
    StoreListingPage,
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
    SativaPage,
    IndicaPage,
    HybridPage,
    ResetPasswordPage,
    NewPasswordPage,
    CheckoutPage,
    PaymentPage,
    PaymentInfoPage,
    ConfirmationPage,
    FriendslistPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, ConnectivityService, AuthService, Storage, Geolocation]
})
export class AppModule {}
