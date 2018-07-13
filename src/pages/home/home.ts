import { Component, OnInit, OnDestroy } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProviderUnoProvider } from '../../providers/provider-uno/provider-uno'
import { Subscription } from 'rxjs/Subscription';
import { LoadingController } from 'ionic-angular';
import { InAppBrowser,InAppBrowserOptions } from '@ionic-native/in-app-browser';
import {PaginaUnoPage} from '../pagina-uno/pagina-uno'
import {PaginaDosPage} from '../pagina-dos/pagina-dos'

/**
 * 
 * @ignore
 */
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  public arrayUsuarios : Array<any> = [];
  private subs : Subscription;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              private usuarioProv : ProviderUnoProvider,
              private inAppBrowser:InAppBrowser,
              public loadingCtrl: LoadingController,) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad homepage');
  }
  ngOnDestroy(): void {
    this.subs && this.subs.unsubscribe();
  }
  ngOnInit(): void {
    let spinner = this.cargando();
    spinner.present(); 
    this.subs = this.usuarioProv.obtenerUsuarios().subscribe(res => {
      this.arrayUsuarios = res;
      console.log("arrayUsuarios ",this.arrayUsuarios);
      spinner.dismiss();
    }, err => {
      console.log(err);
    });
  }

  editNewCliente(user?:any) {
    this.navCtrl.push(PaginaUnoPage, { user : user });
  }
  ayuda(){
    this.navCtrl.push(PaginaDosPage);
  }
  cargando() {
    let loader = this.loadingCtrl.create({
      content: "Cargando...",
      duration: 3000
    });
    return loader;
  }
  mostrarDocumentacion(tipoDoc:string){
    let url:string;
    const options : InAppBrowserOptions ={
      zoom: 'no',
      hardwareback : "yes",
      location: 'yes'
    }
    if (tipoDoc == "apidoc") {
      url = "assets/documentacion/apidocMiniApp/index.html"; 
    }
    if (tipoDoc == "compodoc") {
      url = "assets/documentacion/compodocMiniApp/index.html";
    }
    const browser = this.inAppBrowser.create(url,"_self",options)
    
  }

}
