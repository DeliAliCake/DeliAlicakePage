import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeMainComponent } from 'src/app/components/home/home-main/home-main.component';
import { HomeHeroComponent } from 'src/app/components/home/home-hero/home-hero.component';
import { HomeGalleryComponent } from 'src/app/components/home/home-gallery/home-gallery.component';
import { ComponentModule } from 'src/app/components/components.module';


@NgModule({
  declarations: [],
  imports: [CommonModule, ComponentModule],
  exports: [],
})
export class HomepageModule {}
