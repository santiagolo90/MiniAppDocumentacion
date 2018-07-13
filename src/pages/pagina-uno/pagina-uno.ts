import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser,InAppBrowserOptions } from '@ionic-native/in-app-browser';
import { AngularFirestore } from 'angularfire2/firestore';
import { ProviderUnoProvider } from '../../providers/provider-uno/provider-uno';
import { firestore } from 'firebase/app';


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
  selector: 'page-pagina-uno',
  templateUrl: 'pagina-uno.html',
})
export class PaginaUnoPage {
  // url:string;

  // constructor(public navCtrl: NavController, public navParams: NavParams,private inAppBrowser:InAppBrowser) {
  // }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad PaginaUnoPage');
  //   // if (this.navParams.data.url) {
  //   //   this.url = this.navParams.data.url; 
  //   // }else{
  //   //   this.url = "../../../www/assets/documentation/index.html"; 
  //   // }
  //   this.url = "assets/documentation/index.html"; 
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

  usuario : Usuario;

/**
 * 
 * @ignore
 */
  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              private usuarioProv : ProviderUnoProvider, 
              private afs : AngularFirestore) {

    this.usuario = new Usuario();
  }

  ionViewDidLoad() {
    if(this.navParams.data.user) {
      this.usuario = this.navParams.data.user;
    }
  }


  guardarUsuario() {
    if(this.usuario.key) {
      this.usuarioProv.actualizarUsuario(this.usuario, true).then(res => {
        this.navCtrl.pop();
      });
    } else {
      this.usuarioProv.guardarUsuario(this.usuario).then(res => {
        this.navCtrl.pop();
      });
    }
  }

  eliminar() {
    this.usuarioProv.eliminar(this.usuario.key).then(res => {
      this.navCtrl.pop();
    });
  }

}
/**
 * 
 * @ignore
 */
export class Usuario {
  key : string;
  nombre : string;
  apellido : string;
}
