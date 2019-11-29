import { Component } from '@angular/core';
import { ModalController } from "@ionic/angular";
import { ContentModal, Annotation } from 'src/app/Models/ContentModal';
@Component({ 
 
    selector:'create-form-modal',
    templateUrl :'CreateForm.Modal.html'
})
export class CreateFormModal{

    constructor(public modalController : ModalController){

    }

    Content : ContentModal = new ContentModal();
    Annotations : Annotation[] = new Array();

    closeModal(){
        this.modalController.dismiss();

    }

    onBlockUpdate(){
        alert()
        this.Annotations = new Array();
        //this.Annotations=this.Annotations.fill(new Annotation(),0,this.Content.Block)
        for(let  i = 0;i<this.Content.Block;i++){
            this.Annotations.push(new Annotation())
        }
        
    }

}