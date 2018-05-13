import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-history',
  templateUrl: 'history.html',
})

export class HistoryPage {
  str = new String("");
  path : string = "../../assets/imgs/";
  images:Array<string> = [
    this.path + "a8anasios diakos/streetview.PNG",
    this.path + "arxaiologikos xoros thermopilon/streetview.PNG",
    this.path + "Delfoi/14.PNG",
    this.path + "gefira gorgopotamou/1.jpg",
    this.path + "Kastro karampampa/1.jpg",
    this.path + "Kastro Lamias/Tin ebgala monos m apo google street view.PNG",
    this.path + "Kokkino spiti/streetview.PNG",
    this.path + "liontari tis cheronias/Chaironeia_lion.JPG",
    this.path + "mouseio thibas/1.JPG",
  ];



  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HistoryPage');
  }



}
