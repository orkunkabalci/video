import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: HomePage,
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
export class HomePageRoutingModule {}
