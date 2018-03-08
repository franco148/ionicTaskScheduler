import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

//services
import { WishListService } from './services/wish-list.service';

//pipes
import { PlaceHolderPipe } from './pipes/placeholder.pipe';
import { PendingsPipe } from './pipes/pendings.pipes';

import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { PendingsComponent } from '../pages/pendings/pendings.component';
import { FinishedComponent } from '../pages/finished/finished.component';
import { AddComponent } from '../pages/add/add.component';
import { DetailComponent } from '../pages/detail/detail.component';

@NgModule({
  declarations: [
    MyApp,
    PlaceHolderPipe,
    PendingsPipe,
    TabsPage,
    PendingsComponent,
    FinishedComponent,
    AddComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    PendingsComponent,
    FinishedComponent,
    AddComponent,
    DetailComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    WishListService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
