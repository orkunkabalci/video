import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { series, videos } from '../services/bucket';
@Component({
  selector: 'app-video',
  templateUrl: './video.page.html',
  styleUrls: ['./video.page.scss'],
})
export class VideoPage implements OnInit {
videoid;
video;
loading: boolean = true;

  constructor(private route: ActivatedRoute) { }

 async ngOnInit() {
     this.videoid = this.route.snapshot.paramMap.get('id');
    await this.getvideo().then((data)=>this.video=data)
    this.loading = false;

  }


  getvideo(){
    return videos.get(this.videoid,{ queryParams:{relation:true}})
  }
}
