import { Component } from '@angular/core';

class Customer {
  customerID!: number;
  customerName!: string;
  contactDetail!: string;
purchasehistory!: string;
}

@Component({
  selector: 'app-customer-manage',
  templateUrl: './customer-manage.component.html',
  styleUrls: ['./customer-manage.component.css']
})

export class CustomerManageComponent {
  customers: Customer = new Customer();
  customers_: Customer[] = [];
  onSubmit() {
    // const newCustomer: Customer = {
    //   customerID: form.value.customerID,
    //   customerName: form.value.customerName,
    //   contactDetail: form.value.contactDetail,
    //   purchasehistory: form.value.purchase
    // };

    // this.customers.push(newCustomer);

    // form.reset();
  }
}
