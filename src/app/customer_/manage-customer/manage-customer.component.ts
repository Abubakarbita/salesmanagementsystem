import { Component } from '@angular/core';

class Customer {
  customerID!: number;
  customerName!: string;
  contactDetail!: string;
  purchaseHistory!: string;
email: any;
mail: any;
}

@Component({
  selector: 'app-manage-customer',
  templateUrl: './manage-customer.component.html',
  styleUrls: ['./manage-customer.component.css']
})
export class ManageCustomerComponent {
  customers: Customer = new Customer();
  customers_: Customer[] = [];
  onSubmit() {
    // const newCustomer: Customer = {
    //   customerID: form.value.customerID,
    //   customerName: form.value.customerName,
    //   contactDetail: form.value.contactDetail,
    //   purchaseHistory: form.value.purchaseHistory
    // };

    // this.customers.push(newCustomer);

    // form.reset();
  }
}
