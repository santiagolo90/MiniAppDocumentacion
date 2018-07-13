import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PaginaDosPage } from './pagina-dos';
/**
 * 
 * @ignore
 */
@NgModule({
  declarations: [
    PaginaDosPage,
  ],
  imports: [
    IonicPageModule.forChild(PaginaDosPage),
  ],
})
export class PaginaDosPageModule {}
