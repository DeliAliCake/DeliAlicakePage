import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from '../primeng/primeng.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ButtonUpComponent } from './components/button-up/button-up.component';

@NgModule({
  declarations: [NavbarComponent, FooterComponent, ButtonUpComponent],
  imports: [CommonModule, PrimeNgModule],
  exports: [NavbarComponent, FooterComponent, ButtonUpComponent],
})
export class SharedModule {}
