import { Component, ElementRef, ViewChild } from '@angular/core';

import {NavController, ModalController, NavParams, ViewController, LoadingController, PopoverController} from 'ionic-angular';

import { ConnectivityService } from '../../providers/connectivity-service';
import { Geolocation } from 'ionic-native';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { StoresReviews } from '../stores-reviews/stores-reviews';

import { StoreListingPage } from '../store-listing/store-listing';

import { ProductsPage } from '../products/products';

import { RatingsPage } from '../ratings/ratings';

import { ComplimentaryAdverts } from '../complimentary-adverts/complimentary-adverts';


import { OnlinePage } from '../online/online';

import { EditProfilePage } from '../edit-profile/edit-profile';

import { ReferralPage } from '../referral/referral';

import { DriversMapPage } from '../drivers-map/drivers-map';

import { CartPage } from '../cart/cart';

import { FavoritesPage } from '../favorites/favorites';

import { NotificationsPage } from '../notifications/notifications';

import { Storage } from '@ionic/storage';

declare var google;

@Component({
  templateUrl: 'store-map.html'
})
export class StoreMapPage {
  
  locs: any;
  
  distanceInfo: any ;
  
   @ViewChild('map') mapElement: ElementRef;
 
  map: any;
  mapInitialised: boolean = false;
  apiKey: any;
  
  loadingMap: any ;
  
  itemsInCart: number = 0 ;
 
  constructor(public storage: Storage, public navCtrl: NavController,  public connectivityService: ConnectivityService, public http: Http, public modalCtrl: ModalController, public loadingCtrl: LoadingController, public popoverCtrl: PopoverController) {
    
    this.storage.ready().then(() => {            
            
          this.storage.get("cart").then((val)=>{
              
              var itemsArray = JSON.parse(val);
              
              if(itemsArray != null){
                for(var i=0; i < itemsArray.length; i++ ){
                  
                  this.itemsInCart = this.itemsInCart + 1 ;
                  
                }
              
              }
          
          });   
       
     });
  }
  
  ionViewDidLoad(){
      this.loadGoogleMaps();
  }
  
  
  //open ratings and reviews page for storefronts
  openRatings(store) {
    // navigate to the ratings page
    this.navCtrl.push(RatingsPage,{store:store}) ;

  }
  
  //open complimetary advert modal for storefront
  openAdvert(record) {
      let modal = this.modalCtrl.create(ComplimentaryAdverts,{advert:record});
        modal.present();    
  }
  
  //open complimetary advert modal for storefront
  openLoadingAdvert() {
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
        this.navCtrl.push(ProductsPage) ;
      });

      loading.present();    
  }
  
  mapIsLoading(){
      
      this.loadingMap = this.loadingCtrl.create({
        content: `
                    
                    <div>
                    <p>Map is Loading. Please wait ...</p>
                    </div>
                  `
      });
      
      this.loadingMap.present();
  }
  
  
  loadGoogleMaps(){
  
  this.mapIsLoading() ; 
 
    this.addConnectivityListeners();
 
    if(typeof google == "undefined" || typeof google.maps == "undefined"){
 
    console.log("Google maps JavaScript needs to be loaded.");
    this.disableMap();
 
    if(this.connectivityService.isOnline()){
      console.log("online, loading map");
 
      //Load the SDK
      window['mapInit'] = () => {
        this.initMap();
        this.enableMap();
      }
 
      let script = document.createElement("script");
      script.id = "googleMaps";
 
      if(this.apiKey){
        script.src = 'http://maps.google.com/maps/api/js?key=' + this.apiKey + '&callback=mapInit';
      } else {
        script.src = 'http://maps.google.com/maps/api/js?callback=mapInit';       
      }
      
      document.body.appendChild(script);  
 
    } 
  }
  else {
 
    if(this.connectivityService.isOnline()){
      console.log("showing map");
      this.initMap();
      this.enableMap();
    }
    else {
      console.log("disabling map");
      this.disableMap();
    }
 
  }
 
  }
 
  initMap(){
 
    this.mapInitialised = true;
    
    Geolocation.getCurrentPosition().then((position) => {
 
      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
 
      let mapOptions = {
        center: latLng,
        zoom: 10,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }
 
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
      
      this.getMarkers();
      
      //listen to the tilesloaded event
      //if that is triggered, google maps is loaded successfully for sure 
        //google.maps.event.addListener(this.map, 'tilesloaded', function() {
            this.loadingMap.dismiss();
        //});
 
    });
 
  }

 
  disableMap(){
    console.log("disable map");
  }
 
  enableMap(){
    console.log("enable map");
  }
 
  addConnectivityListeners(){
    
    let onOnline = () => {
 
      setTimeout(() => {
        if(typeof google == "undefined" || typeof google.maps == "undefined"){
 
          this.loadGoogleMaps();
 
        } else {
 
          if(!this.mapInitialised){
            this.initMap();
          }
 
          this.enableMap();
        }
      }, 2000);
 
    };
 
    let onOffline = () => {
      this.disableMap();
    };
 
    document.addEventListener('online', onOnline, false);
    document.addEventListener('offline', onOffline, false);
    
    }
    
  
  getMarkers(){
      
      this.http.get('http://api.medconnex.net/public/storefronts').map(res => res.json()).subscribe(data => {
        
        this.locs = data;
        console.log(this.locs);
        
        this.loadMarkers(data);
      });
      
      
  }
  
  loadMarkers(markers){
      
      Geolocation.getCurrentPosition().then((position) => {
       
        var destination = {lat: position.coords.latitude, lng: position.coords.longitude } ;
        
        console.log(destination); 
      
        var records = markers.markers;
        
        
 
        for (var i = 0; i < records.length; i++) {
 
          var record = records[i];
        
          
          var markerPos = new google.maps.LatLng(record.latitude, record.longitude);
          
          console.log("Latitude: "+record.latitude + " ---  Longitude : "+record.longitude) ;
          
          var origin = {lat : parseFloat(record.latitude), lng: parseFloat(record.longitude)} ;
          
          console.log(origin);
          
         // console.log (position.coords.latitude);
         // console.log (position.coords.longitude);
          
          // Add the marker to the map
          var marker = new google.maps.Marker({
              map: this.map,
              animation: google.maps.Animation.DROP,
              icon: "../../assets/storefronts.png",
              position: markerPos
          });
          
          //call function to find the ETA
          this.estimatedTime(origin,destination);
          
          console.log(this.distanceInfo);
 
          var infoWindowContent = "<h4>" + record.location_name + "</h4> <div> "+ record.address +"</div> <div><strong>Estimated Time: </strong>"+ this.distanceInfo +"</div>";          
              
          infoWindowContent += "<button ion-button color='secondary' large class='browse-button'> Browse </button>" ;
            
          this.addInfoWindow(marker, infoWindowContent, record);
 
        }  
      
      });
      
  }
  
  addInfoWindow(marker, message, record) {
 
      var infoWindow = new google.maps.InfoWindow({
          content: message
      });
 
      google.maps.event.addListener(marker, 'click', function () {
          infoWindow.open(this.map, marker);
      });
      
      var openAd = new StoreMapPage(this.storage, this.navCtrl, this.connectivityService, this.http, this.modalCtrl, this.loadingCtrl, this.popoverCtrl) ;
      
      google.maps.event.addListener(infoWindow, 'domready', function () {
          var browseButton = document.getElementsByClassName("browse-button") ;
          for(var i=0; i < browseButton.length ; i++){
            browseButton[i].addEventListener('click', function(e) {
                e.stopPropagation();
                console.log("Button Clicked");
                openAd.openLoadingAdvert();
            });
          }
      });
 
  }
  
  
  estimatedTime(origin , destination) {
    var details = "" ;
    
    var service = new google.maps.DistanceMatrixService();
    
    var geocoder = new google.maps.Geocoder;

        service.getDistanceMatrix({
          origins: [origin],
          destinations: [destination],
          travelMode: 'DRIVING',
          unitSystem: google.maps.UnitSystem.METRIC,
          avoidHighways: false,
          avoidTolls: false
        }, function(response, status) {
          if (status !== 'OK') {
            alert('Error was: ' + status);
          } else {
            var originList = response.originAddresses;
            var destinationList = response.destinationAddresses;
           // var outputDiv = document.getElementById('output');
           // outputDiv.innerHTML = '';


            for (var i = 0; i < originList.length; i++) {
              var results = response.rows[i].elements;
              
              for (var j = 0; j < results.length; j++) {
                
               // outputDiv.innerHTML += originList[i] + ' to ' + destinationList[j] +
                 //   ': ' + results[j].distance.text + ' in ' +
                   // results[j].duration.text + '<br>';
                    
                    details += "<div>"+results[j].distance.text+"</div><div>"+results[j].duration.text +"</div>"; 
                    //console.log(results[j].distance.text);
                    //console.log(results[j].duration.text);
                    
                    //console.log(details) ;
                    
                    this.distanceInfo = details ;
              }
            }
          }
        });
      
  }
  
  
  onlinePage() {
    // close the menu when clicking a link from the menu
    //this.menu.close();
    // navigate to the new page if it is not the current page
    this.navCtrl.push(OnlinePage);
    
  }
  
  editProfile() {
    this.navCtrl.push(EditProfilePage);
  }
  
  referral() { 
    this.navCtrl.push(ReferralPage);
  }
  
  cart() { 
    this.navCtrl.push(CartPage);
  }
  
  drivers() {
    this.navCtrl.push(DriversMapPage);
  }
  
  store() {
    this.navCtrl.push(StoreMapPage);
  }
  
  listings() {
    this.navCtrl.push(StoreListingPage);
  }
  
  favorites() {
    this.navCtrl.push(FavoritesPage);
  }
  
  notifications() {
    let popover = this.popoverCtrl.create(NotificationsPage);
    popover.present();
  }
    
}