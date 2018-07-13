import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
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
  selector: 'page-tuto',
  templateUrl: 'tuto.html',
})
export class TutoPage {
  tipo:string;
  video:string ="";
  slides=[];
  titulo:string;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    if (this.navParams.get('tipo') == "alta") {
      this.titulo = "Registro de usuarios";
      this.slides=[];
      this.slides = [
        {
          image: "assets/tutorial/1alta.jpg",
        },
        {
          image: "assets/tutorial/2alta.jpg",
        },
        {
          image: "assets/tutorial/3alta.jpg",
        }
      ];
      this.video = "assets/tutorial/alta.mp4";
    }
    if (this.navParams.get('tipo') == "eliminar") {
      this.titulo = "Registro de usuarios";
      this.slides=[];
      this.slides = [
        {
          image: "assets/tutorial/eliminar1.jpg",
        },
        {
          image: "assets/tutorial/eliminar2.jpg",
        },
        {
          image: "assets/tutorial/eliminar3.jpg",
        }
      ];
      this.video = "assets/tutorial/eliminar.mp4";
    }
    if (this.navParams.get('tipo') == "modificar") {
      this.titulo = "Registro de usuarios";
      this.slides=[];
      this.slides = [
        {
          image: "assets/tutorial/modificar1.jpg",
        },
        {
          image: "assets/tutorial/modificar2.jpg",
        },
        {
          image: "assets/tutorial/modificar3.jpg",
        }
      ];
      this.video = "assets/tutorial/modificar.mp4";
    }
    if (this.navParams.get('tipo')) {
      //this.tipo = this.navParams.get('tipo');
      this.tipo = "assets/tutorial/"+this.navParams.get('tipo')+".mp4";
      console.log(this.tipo);
      
    }
  }
  cerrarModal(){
    //this.navCtrl.pop();
    this.viewCtrl.dismiss();
  }

}
