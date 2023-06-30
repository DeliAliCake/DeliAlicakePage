import { Component } from '@angular/core';

@Component({
  selector: 'shared-whatsapp-button',
  templateUrl: './whatsapp-button.component.html',
  styleUrls: ['./whatsapp-button.component.scss']
})
export class WhatsappButtonComponent {
  numberPhone = '3012324977'
  whastUrl = `https://wa.me/${this.numberPhone}`
  goToWhatsapp(){
    window.open(this.whastUrl, '_blank')
  }
}
