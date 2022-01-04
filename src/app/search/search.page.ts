import { Component, OnInit } from '@angular/core';
import { series } from '../services/bucket';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  series;
  searchTerm: string;
  loading: boolean = true;

  constructor() {}

  async ngOnInit() {
    await this.search('');
    this.loading = false;
  }
  async search(terms) {
    this.series = await series.getAll({
      queryParams: {
        relation: true,
        filter: {
          $or: [
            { title: { $regex: terms, $options: 'i' } },
            {
              'tags.tag':{  $regex: terms, $options: 'i' },
              
            },
          ],
        },
        limit: 10,
      },
    })
  }
}
