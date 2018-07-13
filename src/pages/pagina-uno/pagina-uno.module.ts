import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PaginaUnoPage } from './pagina-uno';

/**
 * 
 * @ignore
 */
@NgModule({
  declarations: [
    PaginaUnoPage,
  ],
  imports: [
    IonicPageModule.forChild(PaginaUnoPage),
  ],
})
export class PaginaUnoPageModule {}
