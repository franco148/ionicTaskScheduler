import { Component, OnInit } from '@angular/core';
import { WishListService } from '../../app/services/wish-list.service';

import { NavController } from 'ionic-angular';
import { AddComponent } from '../add/add.component';

@Component({
  selector: 'app-pendings',
  templateUrl: 'pendings.component.html',
})
export class PendingsComponent implements OnInit {
  constructor(private _wishList : WishListService,
              private navController: NavController) {
  }

  ngOnInit() {}

  addNewList() {
    this.navController.push(AddComponent);
  }
}
