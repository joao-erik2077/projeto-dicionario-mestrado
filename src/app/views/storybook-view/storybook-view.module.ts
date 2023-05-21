import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StorybookViewPageRoutingModule } from './storybook-view-routing.module';

import { StorybookViewPage } from './storybook-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StorybookViewPageRoutingModule
  ],
  declarations: [StorybookViewPage]
})
export class StorybookViewPageModule {}
