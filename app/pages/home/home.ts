import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AppItemCollection, appList } from '../../service/appCollectionService';



@Component({
  templateUrl: 'build/pages/home/home.html',
  providers: [AppItemCollection]
})
export class HomePage {
  appCollectionList : appList[];

  constructor(public navCtrl: NavController, public appCollection : AppItemCollection) {
    this.appCollectionList = appCollection.applicationCollection;
  }


  navAppPage(appItem){
    this.navCtrl.push(appItem.redirectUrl);
  }
}
