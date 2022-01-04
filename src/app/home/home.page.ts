import { Component, OnInit } from '@angular/core';
import { series, site_configuration, users, videos } from '../services/bucket';
import { SlideComponent } from '../components/slide/slide.component';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  config;
  series;
  video;
  user;
  listed;
  index;
  loading: boolean = true;

  constructor(public toastCtrl: ToastController) {}

  async ngOnInit() {
    await this.getcongfig().then((data) => (this.config = data));
    await this.getseries().then((data) => (this.series = data));
   await  this.getvideo().then((data) => (this.video = data));
    await this.getuser().then((data) => (this.user = data));
    await this.listcheck();
    this.loading = false;

  }

  listfunc() {
    if (this.listed == true) {
      this.index = this.user?.watch_list
        .map((item) => item._id)
        .indexOf(this.config.showcase._id);
      this.user?.watch_list.splice(this.index, 1);
      this.listed = false;
      this.openToast('Removed from my list');
      return users.patch(JSON.parse(JSON.stringify(this.user)));
    } else {
      this.user.watch_list.unshift(this.config.showcase);
      this.listed = true;
      this.openToast('Added to my list');
      return users.patch(JSON.parse(JSON.stringify(this.user)));
    }
  }
  async openToast(alert) {
    const toast = await this.toastCtrl.create({
      message: alert,
      duration: 4000,
      cssClass: 'my-custom-class',
    });
    toast.present();
  }

  listcheck() {
    if (
      this.user?.watch_list
        .map((item) => item._id)
        .includes(this.config?.showcase._id)
    ) {
      return (this.listed = true);
    } else {
      return (this.listed = false);
    }
  }
  getuser() {
    return users.get('61cda1021fcf06002dc764e5', {
      queryParams: { relation: true },
    });
  }
  getvideo() {
    return videos
      .getAll({
        queryParams: {
          relation: true,
          filter: {
            'serie._id': this.config?.showcase._id,
            season: 1,
            episode: 1,
          },
        },
      })
      .then((res) => {
        return res[0] || null;
      });
  }

  getcongfig() {
    return site_configuration
      .getAll({ queryParams: { relation: ['showcase.tags', 'showcase'] } })
      .then((res) => {
        return res[0] || null;
      });
  }

  getseries() {
    return series.getAll({ queryParams: { relation: true } });
  }
}
