import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ProviderUnoProvider } from '../providers/provider-uno/provider-uno';
import { ProviderdosProvider } from '../providers/providerdos/providerdos';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { PaginaUnoPage } from '../pages/pagina-uno/pagina-uno';
import { PaginaDosPage } from '../pages/pagina-dos/pagina-dos';
import { TutoPage } from '../pages/tuto/tuto';
//Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database-deprecated';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFirestore, AngularFirestoreModule } from 'angularfire2/firestore';

import { ModalController } from 'ionic-angular';

/**
 * 
 * @ignore
 */
export const firebaseConfig = {
/**
 * Datos de firebase 
 */
};

/**
 * 
 * @ignore
 */
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PaginaUnoPage,
    PaginaDosPage,
    TutoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PaginaUnoPage,
    PaginaDosPage,
    TutoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireAuth,
    AngularFireDatabase,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProviderUnoProvider,
    ProviderdosProvider,
    InAppBrowser
  ]
})
export class AppModule {}
