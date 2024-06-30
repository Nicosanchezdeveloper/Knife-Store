import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListKnifeComponent } from './list-knife/list-knife.component';
import { FormsModule } from '@angular/forms';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { KnifeCatalogComponent } from './knife-catalog/knife-catalog.component';


@NgModule({
  declarations: [
    AppComponent,
    ListKnifeComponent,
    ContactComponent,
    AboutComponent,
    KnifeCatalogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
