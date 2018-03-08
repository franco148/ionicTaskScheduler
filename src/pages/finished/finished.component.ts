import { Component, OnInit } from '@angular/core';
import { WishListService } from '../../app/services/wish-list.service';

import { NavController } from 'ionic-angular';
import { DetailComponent } from '../detail/detail.component';

@Component({
  selector: 'app-finished',
  templateUrl: 'finished.component.html',
})
export class FinishedComponent implements OnInit {
  constructor(private _wishList : WishListService,
              private navController: NavController) {
  }

  ngOnInit() {}

  seeDetail(list, idx) {
    this.navController.push(DetailComponent, { list, idx });
  }
}
