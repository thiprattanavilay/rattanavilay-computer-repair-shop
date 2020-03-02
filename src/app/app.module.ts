import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'

import { MatDialogModule } from "@angular/material/dialog";
import { FlexLayoutModule } from '@angular/flex-layout';


import { MatIconModule,} from '@angular/material/icon';
import {  MatMenuModule} from '@angular/material/menu';
import {  MatButtonModule} from '@angular/material/button';
import {  MatToolbarModule} from '@angular/material/toolbar';
import {  MatCardModule} from '@angular/material/card';
import {  MatFormFieldModule} from '@angular/material/form-field';
import {  MatInputModule} from '@angular/material/input';
import {  MatSidenavModule} from '@angular/material/sidenav';
import {  MatListModule} from '@angular/material/list';
//import {  MatOptionModule} from '@angular/material/';
import {  MatSelectModule} from '@angular/material/select';
import {  MatCheckboxModule} from '@angular/material/checkbox';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { InvoiceComponent } from './invoices/invoices.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AccountComponent } from './account/account.component';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServicesComponent,
    InvoiceComponent,
    AboutComponent,
    ContactComponent,
    AccountComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    FlexLayoutModule,
    //MatOptionModule,
    MatSelectModule,
    MatCheckboxModule,
    MatDialogModule,
    LayoutModule,
  ],
  providers: [],
  entryComponents: [
    InvoiceComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
