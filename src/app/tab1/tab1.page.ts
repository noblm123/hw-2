import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

import { User } from '../models';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class tab1 {

  public transactions: Array<string> = new Array();

  public users: Array<User> = [];

  public currentUser: User;

  constructor(
    private navCtrl: NavController
  ) {
    this.transactions.push("one");
    this.transactions.push("two");
    this.transactions.push("three");

    let user1 = new User();
    user1.name = "Mark";
  
    this.users.push(user1);
        

    this.currentUser = new User();
    this.currentUser.name = "Main User";
  }

  navToTab1() {
    this.navCtrl.navigateForward("main/tabs/tab1");
  }

}