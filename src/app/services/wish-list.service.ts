import { Injectable } from '@angular/core';
import { List } from '../classes/lists';

@Injectable()
export class WishListService {

  lists: List[] = [];

  constructor() {
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
