import { Component } from '@angular/core';
import { NavController } from '@ionic/angular'
@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.page.html',
  styleUrls: ['./inbox.page.scss'],
})
export class InboxPage {

  
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

