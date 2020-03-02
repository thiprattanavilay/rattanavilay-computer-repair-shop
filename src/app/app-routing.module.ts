import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component'; // Add this
import { ServicesComponent } from './services/services.component'; // Add this
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AccountComponent } from './account/account.component';



const routes: Routes = [
  { path: '', component: HomeComponent },              // Add this
  { path: 'services', component: ServicesComponent },           // Add this
  { path: 'about', component: AboutComponent },         // Add this
  { path: 'contact', component: ContactComponent },           // Add this
  { path: 'account', component: AccountComponent }           // Add this
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
