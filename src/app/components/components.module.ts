import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { QuoteformComponent } from './quote/quoteform/quoteform.component';
import { HomeHeroComponent } from './home/home-hero/home-hero.component';
import { HomeMainComponent } from './home/home-main/home-main.component';
import { HomeGalleryComponent } from './home/home-gallery/home-gallery.component';
import { PrimeNgModule } from '../primeng/primeng.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeHeroComponent,
    HomeMainComponent,
    HomeGalleryComponent,
    QuoteformComponent,
  ],
  imports: [CommonModule, PrimeNgModule, ReactiveFormsModule],
  exports: [
    HomeHeroComponent,
    HomeMainComponent,
    HomeGalleryComponent,
    QuoteformComponent,
  ],
})
export class ComponentModule {}
