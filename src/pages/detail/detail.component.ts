import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { List, ListItem } from '../../app/classes/index';
import { WishListService } from '../../app/services/wish-list.service';
import { PendingsComponent } from '../pendings/pendings.component';

@Component({
  selector: 'app-detail',
  templateUrl: 'detail.component.html',
})
export class DetailComponent implements OnInit {


  index:number;
  list:List;

  constructor(public navController: NavController,
              public navParams: NavParams,
              public _wishService: WishListService,
              public alertController: AlertController) {
    //console.log(this.navParams);
    this.index = this.navParams.get("idx");
    this.list = this.navParams.get("list");
  }

  ngOnInit() {}

  udpate(item:ListItem) {
    item.completed = !item.completed;

    let areListItemsFinished = true;
    for(let item of this.list.items) {
      if(!item.completed) {
        areListItemsFinished = false;
        break;
      }
    }

    this.list.completed = areListItemsFinished;
    this._wishService.updateData();
  }

  removeItem() {
    let alert = this.alertController.create({
      title: 'Confirm Delete',
      message: `Are you sure you want to remove ${this.list.name} List?`,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Remove',
          handler: () => {
            console.log('Item removed clicked');
            this._wishService.removeList(this.list);
            this.navController.pop();
          }
        }
      ]
    });

    alert.present();
  }
}
