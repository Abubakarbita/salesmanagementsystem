import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';

import { InventoryManagentComponent } from './inventory/inventory-managent.component';
import { SalesTransactionComponent } from './salestransaction/sales-transaction.component';
import { SalesReportsComponent } from './sales/sales-reports.component';
import { LoginComponent } from './login/login.component';
import { ManageCustomerComponent } from './customer_/manage-customer/manage-customer.component';
import { SignInComponent } from './signin/signin.component';

const routes: Routes = [


  {
    path: '',
    component: NavigationComponent,
     children: [

      {
        path: '',
        component: HomeComponent,
      },
      
      {
        path: 'inventory-management',
        component: InventoryManagentComponent
      },

      {
        path: 'manage-customer',
        component: ManageCustomerComponent,
      },
      {
        path: 'salestransaction',
        component: SalesTransactionComponent,

      },
      {
        path: 'sales',
        component: SalesReportsComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'signin',
        component: SignInComponent,
      },
    ]
  }
    ];

    @NgModule({
      imports: [RouterModule.forRoot(routes)],
      exports: [RouterModule]
    })

    export class AppRoutingModule { }
