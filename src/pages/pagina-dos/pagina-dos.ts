import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser,InAppBrowserOptions } from '@ionic-native/in-app-browser';
import { ModalController } from 'ionic-angular';
import { TutoPage } from '../tuto/tuto';

/**
 * Generated class for the PaginaDosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
/**
 * 
 * @ignore
 */
@IonicPage()
/**
 * 
 * @ignore
 */
@Component({
  selector: 'page-pagina-dos',
  templateUrl: 'pagina-dos.html',
})
export class PaginaDosPage {
  url:string;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private inAppBrowser:InAppBrowser,
              public modalCtrl: ModalController) {
  }

  irTutorial(donde:string){
    if (donde == "alta") {
      let profileModal = this.modalCtrl.create(TutoPage, { tipo: "alta"});
      profileModal.present();
    }
    if (donde == "eliminar") {
      let profileModal = this.modalCtrl.create(TutoPage, { tipo: "eliminar"});
      profileModal.present();
    }
    if (donde == "modificar") {
      let profileModal = this.modalCtrl.create(TutoPage, { tipo: "modificar"});
      profileModal.present();
    }
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad PaginaDosPage');
  //   // if (this.navParams.data.url) {
  //   //   this.url = this.navParams.data.url; 
  //   // }else{
  //   //   this.url = "../../../www/assets/documentation/index.html"; 
  //   // }
  //   this.url = "assets/compodoc/index.html"; 
  //   this.mostrarDocumentacion();
  // }

  // mostrarDocumentacion(){
  //   const options : InAppBrowserOptions ={
  //     zoom: 'no',
  //     hardwareback : "yes",
  //     location: 'yes'
  //   }
  //   const browser = this.inAppBrowser.create(this.url,"_self",options)
  // }

}
