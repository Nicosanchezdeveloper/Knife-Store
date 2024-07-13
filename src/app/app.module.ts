import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListKnifeComponent } from './list-knife/list-knife.component';
import { FormsModule } from '@angular/forms';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { KnifeCatalogComponent } from './knife-catalog/knife-catalog.component';
import { CartComponent } from './cart/cart.component';
import { CommonModule } from '@angular/common';
import { InputQuantityComponent } from './input-quantity/input-quantity.component';
import { OrderKnifeComponent } from './order-knife/order-knife.component';

@NgModule({
  declarations: [
    AppComponent,
    ListKnifeComponent,
    ContactComponent,
    AboutComponent,
    KnifeCatalogComponent,
    CartComponent,
    InputQuantityComponent,
    OrderKnifeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
