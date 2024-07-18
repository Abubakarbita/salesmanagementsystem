import { Component } from '@angular/core';

interface Customer {
  customerID: string;
  customerName: string;
  contactDetail: string;
  emailAddress: string;
}


export class CustomerComponent {
  customers: Customer[] = [];

  onSubmit(form: any) {
    const newCustomer: Customer = {
      customerID: form.value.customerID,
      customerName: form.value.customerName,
      contactDetail: form.value.contactDetail,
      emailAddress: form.value.emailAddress
    };

    this.customers.push(newCustomer);

    form.reset();
  }
}
