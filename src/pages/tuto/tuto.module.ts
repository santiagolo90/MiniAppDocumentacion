import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TutoPage } from './tuto';
/**
 * 
 * @ignore
 */
@NgModule({
  declarations: [
    TutoPage,
  ],
  imports: [
    IonicPageModule.forChild(TutoPage),
  ],
})
export class TutoPageModule {}
