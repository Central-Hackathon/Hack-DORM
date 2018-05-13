import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CategoriesPage } from '../categories/categories';
import { IbeaconProvider } from '../../providers/ibeacon/ibeacon';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  image:string = "lamia.png";
  location:string = "Λαμία";
  map:string = "no beacons";


  constructor(public navCtrl: NavController, private ibeaconProvider: IbeaconProvider) {
    
  }

  mapChange(map:string){
    this.map = map;
  }

  categoryClick(){
    this.navCtrl.push (CategoriesPage);
  }
  
  startSearching(){
    this.ibeaconProvider.ScanBeacons();
  }
}
