import { Component } from '@angular/core';
import { users } from '../services/bucket';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage   {
user
loading: boolean = true;

  constructor() { }

  async ionViewWillEnter() {
   await this.getuser().then((data)=>this.user=data)
   this.loading = false;

  }
getuser(){
  return users.get('61cda1021fcf06002dc764e5',{queryParams:{relation:true}})
}
}
