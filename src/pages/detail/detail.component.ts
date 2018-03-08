import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'app-detail',
  templateUrl: 'detail.component.html',
})
export class DetailComponent implements OnInit {


  index:number;
  list:any;

  constructor(public navController: NavController,
              public navParams: NavParams) {
    //console.log(this.navParams);
    this.index = this.navParams.get("idx");
    this.list = this.navParams.get("list");
  }

  ngOnInit() {}
}
