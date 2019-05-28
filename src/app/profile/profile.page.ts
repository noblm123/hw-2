import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage {

  constructor(private navCtrl: NavController) {}

  navToSaved() {
    this.navCtrl.navigateForward("saved");
  }
  navToExplore() {
    this.navCtrl.navigateForward("explore");
  }
  navToTrips() {
    this.navCtrl.navigateForward("trips");
  }
  navToInbox() {
    this.navCtrl.navigateForward("inbox");
  }
}