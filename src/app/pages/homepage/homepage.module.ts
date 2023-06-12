import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeMainComponent } from 'src/app/components/home/home-main/home-main.component';
import { HomeHeroComponent } from 'src/app/components/home/home-hero/home-hero.component';
import { HomeGalleryComponent } from 'src/app/components/home/home-gallery/home-gallery.component';

@NgModule({
  declarations: [HomeHeroComponent, HomeMainComponent, HomeGalleryComponent],
  imports: [CommonModule],
  exports: [HomeHeroComponent, HomeMainComponent, HomeGalleryComponent],
})
export class HomepageModule {}
