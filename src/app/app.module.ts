import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NewsaleService } from './newsale.service'; // Ensure the correct service file name
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { InventoryManagentComponent } from './inventory/inventory-managent.component';
import { LoginComponent } from './login/login.component';
import { SalesReportsComponent } from './sales/sales-reports.component';
import { SalesTransactionComponent } from './salestransaction/sales-transaction.component';
import { SignInComponent } from './signin/signin.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    InventoryManagentComponent,
    LoginComponent,
    SalesReportsComponent,
    SalesTransactionComponent,
    SignInComponent

  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [NewsaleService], // Provide the NewsaleService globally
  bootstrap: [AppComponent]
})
export class AppModule { }
