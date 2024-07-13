import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { KnifeCatalogComponent } from './knife-catalog/knife-catalog.component';
import { OrderKnifeComponent } from './order-knife/order-knife.component';

const routes: Routes = [

{
  path: '',
  component: AboutComponent
},
{
  path: 'knifecatalog',
  component: KnifeCatalogComponent
},
{
  path: 'orderknife',
  component: OrderKnifeComponent
}
,
{
  path: 'contact',
  component: ContactComponent
}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
