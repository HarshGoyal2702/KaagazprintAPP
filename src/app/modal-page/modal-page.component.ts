import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'modal-page',
  templateUrl: './modal-page.component.html',
  styleUrls: ['./modal-page.component.scss'],
})
export class ModalPageComponent {
  @Input() data: any;  // Use @Input to pass data to the modal
  
  constructor(private modalController:ModalController) {}

  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    });
    
}}
