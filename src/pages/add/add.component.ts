import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from 'ionic-angular';

import { List, ListItem } from '../../app/classes/index';
import { WishListService } from '../../app/services/wish-list.service';

@Component({
  selector: 'app-add',
  templateUrl: 'add.component.html',
})
export class AddComponent implements OnInit {

  listName:string = "";
  itemName:string = "";

  items: ListItem[] = [];

  constructor(public alertController: AlertController,
              public navControler: NavController,
              public _wishService: WishListService) {
  }

  ngOnInit() {}

  addItem() {
    if (this.itemName.length == 0) {
        return;
    }

    let item = new ListItem();
    item.name = this.itemName;

    this.items.push(item);
    this.itemName = "";
  }

  removeItem(index:number) {
    if(index < 0) {
      return;
    }

    this.items.splice(index, 1);
  }

  saveList() {
    if (this.listName.length == 0) {
      let alert = this.alertController.create({
        title: 'List Name',
        subTitle: 'The List Name is required.',
        buttons: ['OK']
      });

      alert.present();
      return;
    }

    let list = new List(this.listName);
    list.items = this.items;

    //this._wishService.lists.push(list);
    this._wishService.addNewList(list);

    this.navControler.pop();
  }
}
