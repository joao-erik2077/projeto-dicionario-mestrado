import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DictionaryViewPageRoutingModule } from './dictionary-view-routing.module';

import { DictionaryViewPage } from './dictionary-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DictionaryViewPageRoutingModule
  ],
  declarations: [DictionaryViewPage]
})
export class DictionaryViewPageModule {}
