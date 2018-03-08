import { Component } from '@angular/core';

import { PendingsComponent } from '../pendings/pendings.component';
import { FinishedComponent } from '../finished/finished.component';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

//Lets changes the first component order.
  // tab1Root = HomePage;
  tab1Root = PendingsComponent;
  tab2Root = FinishedComponent;

  constructor() {

  }
}
