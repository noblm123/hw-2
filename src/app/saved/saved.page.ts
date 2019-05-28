import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-saved',
  templateUrl: './saved.page.html',
  styleUrls: ['./saved.page.scss'],
})
export class SavedPage{

  constructor(private navCtrl: NavController) { }

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
  navToProfile() {
    this.navCtrl.navigateForward("profile");
  }
}
