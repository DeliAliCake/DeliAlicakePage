import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { QuotepageComponent } from './quotepage/quotepage.component';
import { HomepageModule } from './homepage/homepage.module';
@NgModule({
  imports: [CommonModule, HomepageModule],
  declarations: [HomepageComponent],
  exports: [HomepageComponent],
})
export class PagesModule {}
