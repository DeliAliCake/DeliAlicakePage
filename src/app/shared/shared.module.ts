import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from '../primeng/primeng.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [NavbarComponent, FooterComponent],
  imports: [CommonModule, PrimeNgModule],
  exports: [NavbarComponent, FooterComponent],
})
export class SharedModule {}
