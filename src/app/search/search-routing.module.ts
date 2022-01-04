import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchPage } from './search.page';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: SearchPage,
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
export class SearchPageRoutingModule {}
