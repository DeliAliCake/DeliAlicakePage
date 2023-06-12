import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { QuotepageComponent } from './pages/quotepage/quotepage.component';
import { HomeGalleryComponent } from './components/home/home-gallery/home-gallery.component';
import { HomepageModule } from './pages/homepage/homepage.module';
import { PagesModule } from './pages/pages.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, SharedModule, PagesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
