import { Component,  } from '@angular/core';
import { series, user, users } from '../services/bucket';

@Component({
  selector: 'app-mylist',
  templateUrl: './mylist.page.html',
  styleUrls: ['./mylist.page.scss'],
})
export class MylistPage   {
  user;
  series;
  loading: boolean = true;

  constructor() {}

  async ionViewWillEnter() {
    await this.getuser()
      .then((data) => (this.user = data))
    await this.getseries().then((data) => (this.series = data))
    this.loading = false;
  }

  getuser() {
    return users.get('61cda1021fcf06002dc764e5', {
      queryParams: { relation: true },
    });
  }

  getseries() {
    return series.getAll({
      queryParams: {
        relation: true,
        filter: { _id: { $in: this.user?.watch_list.map((item)=>item._id) } },
      },
    });
  }
}
