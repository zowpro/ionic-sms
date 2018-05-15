import { Component } from '@angular/core';
import { SMS } from 'ionic-native';
import { NavController, ToastController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private toast : ToastController, public navCtrl: NavController) {

  }

  async sendTextMessage(){
    try {
      await SMS.send('0560207712', 'Message');
      const toast = this.toast.create({
        message: 'Greaaaaaaat',
        duration: 8000
      });
      toast.present();
    } catch(e) {
      const toast = this.toast.create({
        message: 'Noooooooo',
        duration: 8000
      });
      toast.present();
    }
  }

}
