import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonItem } from '@ionic/angular';
import { series, users, videos } from '../services/bucket';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-series-detail',
  templateUrl: './series-detail.page.html',
  styleUrls: ['./series-detail.page.scss'],
})
export class SeriesDetailPage implements OnInit {
  seriesId;
  series;
  videos=[];
  seasonsnumber;
  activeseason: number = 1;
  user;
  listed;
  index;
  likestatus;
  indexoflike;
  loading: boolean = true;

  constructor(
    public toastCtrl: ToastController,
    private route: ActivatedRoute
  ) {}

  async ngOnInit() {
    this.seriesId = this.route.snapshot.paramMap.get('id');
    await this.getseries()
      .then((data) => (this.series = data))
      .then(() => (this.seasonsnumber = this.series.total_season));
    await this.getuser().then((data) => (this.user = data));
    await this.getvideos()
    await this.listcheck();
    await this.likecheck();
    this.loading = false;
  }
  async openToast(alert) {
    const toast = await this.toastCtrl.create({
      message: alert,
      duration: 4000,
      cssClass: 'my-custom-class',
    });
    toast.present();
  }
  getseries() {
    return series.get(this.seriesId, { queryParams: { relation: true } });
  }
  getuser() {
    return users.get('61cda1021fcf06002dc764e5', {
      queryParams: { relation: true },
    });
  }
  listfunc() {
    if (this.listed == true) {
      this.index = this.user?.watch_list
        .map((item) => item._id)
        .indexOf(this.series._id);
      this.user?.watch_list.splice(this.index, 1);
      this.listed = false;
      this.openToast('Removed from my list');
      return users.patch(JSON.parse(JSON.stringify(this.user)));
    } else {
      this.user.watch_list.unshift(this.series);
      this.listed = true;
      this.openToast('Added to my list');
      return users.patch(JSON.parse(JSON.stringify(this.user)));
    }
  }

  likefunc(data) {
    if (data == 'like') {
      if (this.likestatus == undefined) {
        this.user.likes.push(this.series);
        this.openToast('Liked');
      } else if (this.likestatus == false) {
        this.indexoflike = this.user.dislikes
          .map((item) => item._id)
          .indexOf(this.series._id);
        this.user.dislikes.splice(this.indexoflike, 1);
        this.user.likes.push(this.series);
        this.openToast('Liked');
      } else if (this.likestatus == true) {
        this.openToast('Already Liked');
      }
    } else if (data == 'dislike') {
      if (this.likestatus == undefined) {
        this.user.dislikes.push(this.series);
        this.openToast('Not Liked');
      } else if (this.likestatus == true) {
        this.indexoflike = this.user.likes
          .map((item) => item._id)
          .indexOf(this.series._id);
        this.user.likes.splice(this.indexoflike, 1);
        this.user.dislikes.push(this.series);
        this.openToast('Not Liked');
      } else if (this.likestatus == false) {
        this.openToast('Already Not Liked');
      }
    }
    this.likecheck();

    return users.patch(JSON.parse(JSON.stringify(this.user)));
  }

  listcheck() {
    if (
      this.user?.watch_list.map((item) => item._id).includes(this.series._id)
    ) {
      this.listed = true;
    } else {
      this.listed = false;
    }
  }

  likecheck() {
    if (this.user.likes.map((item) => item._id).includes(this.series._id)) {
      this.likestatus = true;
    } else if (
      this.user.dislikes.map((item) => item._id).includes(this.series._id)
    ) {
      this.likestatus = false;
    }
  }

  getvideos() {
    return videos.getAll({
      queryParams: {
        relation: true,
        filter: { 'serie._id': this.seriesId, season: this.activeseason },
        sort: { episode: 1 },
      },
    })      .then((data) => (this.videos = data))

  }
  
}
