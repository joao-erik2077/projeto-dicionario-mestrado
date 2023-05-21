import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'games',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'dictionary',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'storybook',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: 'dictionary/:id',
        loadChildren: () => import('../views/dictionary-view/dictionary-view.module').then(m => m.DictionaryViewPageModule)
      },
      {
        path: 'game/:id',
        loadChildren: () => import('../views/game-view/game-view.module').then(m => m.GameViewPageModule)
      },
      {
        path: 'storybook/:id',
        loadChildren: () => import('../views/storybook-view/storybook-view.module').then(m => m.StorybookViewPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/games',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/games',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule { }
