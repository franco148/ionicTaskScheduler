import { Component, OnInit } from '@angular/core';
import { WishListService } from '../../app/services/wish-list.service';

@Component({
  selector: 'app-pendings',
  templateUrl: 'pendings.component.html',
})
export class PendingsComponent implements OnInit {
  constructor(private _wishList : WishListService) {  }

  ngOnInit() {}
}
