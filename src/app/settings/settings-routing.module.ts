import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingsPage } from './settings.page';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: SettingsPage,
      },
      {
        path: 'series-detail/:id',
        loadChildren: () =>
          import('../series-detail/series-detail.module').then(
            (m) => m.SeriesDetailPageModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsPageRoutingModule {}
