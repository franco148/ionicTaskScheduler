import { Injectable } from '@angular/core';
import { List } from '../classes/lists';

@Injectable()
export class WishListService {

  lists: List[] = [];

  constructor() {
    // let list1 = new List('Compras de supermercado');
    // let list2 = new List('Tareas de mi proyecto');
    // let list3 = new List('Tareas de universidad');
    //
    // this.lists.push(list1);
    // this.lists.push(list2);
    // this.lists.push(list3);
    this.loadData();
    console.log('Service Initialized');
  }

  updateData() {
    localStorage.setItem("data", JSON.stringify(this.lists));
  }

  loadData() {
    if (localStorage.getItem("data")) {
        this.lists = JSON.parse(localStorage.getItem("data"));
    }
  }

  addNewList(list:List) {
    this.lists.push(list);
    this.updateData();
  }
}
