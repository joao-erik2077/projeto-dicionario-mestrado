import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StorybookViewPage } from './storybook-view.page';

const routes: Routes = [
  {
    path: '',
    component: StorybookViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StorybookViewPageRoutingModule {}
