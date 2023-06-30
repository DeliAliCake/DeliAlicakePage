import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from '../primeng/primeng.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ButtonUpComponent } from './components/button-up/button-up.component';
import { WhatsappButtonComponent } from './whatsapp-button/whatsapp-button.component';
import { NavigationsButtonsComponent } from './navigations-buttons/navigations-buttons.component';

@NgModule({
  declarations: [NavbarComponent, FooterComponent, ButtonUpComponent, WhatsappButtonComponent, NavigationsButtonsComponent],
  imports: [CommonModule, PrimeNgModule],
  exports: [NavbarComponent, FooterComponent, ButtonUpComponent, WhatsappButtonComponent, NavigationsButtonsComponent],
})
export class SharedModule {}
