import { Component } from '@angular/core';
import {  ModalController } from "@ionic/angular";
import { CreateFormModal } from '../Modals/CreateModal/CreateForm.Modal';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public modalController: ModalController) {

  }

  async OpenCreateForm(){
    const modal = await this.modalController.create({
      component: CreateFormModal
    })
    return await modal.present();
  }

}
