import { Component} from '@angular/core';

import { Platform} from 'ionic-angular';

@Component({
  templateUrl: 'ratings.html'
})

export class RatingsPage {
  isAndroid: boolean = false;
  rate: string = "reviews";
 
  constructor() {
    
  }
  
  
}