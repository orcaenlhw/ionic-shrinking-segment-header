import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  section: string = 'two';
    somethings: any = new Array(20);
    constructor(public navCtrl: NavController) {
    }

}
