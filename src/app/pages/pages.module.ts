import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { QuotepageComponent } from './quotepage/quotepage.component';
import { HomepageModule } from './homepage/homepage.module';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PrimeNgModule } from '../primeng/primeng.module';
import { ComponentModule } from '../components/components.module';
@NgModule({
  imports: [
    CommonModule,
    PrimeNgModule,
    HomepageModule,
    SharedModule,
    ReactiveFormsModule,
    ComponentModule,
  ],
  declarations: [HomepageComponent, QuotepageComponent],
  exports: [HomepageComponent, QuotepageComponent],
})
export class PagesModule {}
