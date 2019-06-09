import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { User } from '../models';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  
  constructor(private navCtrl: NavController) {}

  navToProfile() {
    this.navCtrl.navigateForward("profile");
  }

}
