import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { CategoriesPage} from '../pages/categories/categories';
import { HistoryPage } from '../pages/history/history';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IBeacon } from '@ionic-native/ibeacon';
import { IbeaconProvider } from '../providers/ibeacon/ibeacon';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    CategoriesPage,
    HistoryPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp ,
    HomePage,
    ListPage,
    CategoriesPage,
    HistoryPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    IBeacon,
    IbeaconProvider
  ]
})
export class AppModule {}
