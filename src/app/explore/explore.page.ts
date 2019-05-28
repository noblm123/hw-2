import { Component } from '@angular/core';
import { NavController } from '@ionic/angular'

@Component({
  selector: 'app-explore',
  templateUrl: './explore.page.html',
  styleUrls: ['./explore.page.scss'],
})
export class ExplorePage{

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

