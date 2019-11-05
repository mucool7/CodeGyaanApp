import { Component } from '@angular/core';
import { ModalController } from "@ionic/angular";
@Component({ 
 
    selector:'create-form-modal',
    templateUrl :'CreateForm.Modal.html'
})
export class CreateFormModal{

    constructor(public modalController : ModalController){

    }

    closeModal(){
        this.modalController.dismiss();

    }

}