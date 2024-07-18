import { Component, OnInit } from '@angular/core';
import { Inventory } from '../inventory';
import { InventoryService } from '../inventory.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-inventory-managent',
  templateUrl: './inventory-managent.component.html',
  styleUrls: ['./inventory-managent.component.css']
})
export class InventoryManagentComponent {

  // inventory: Inventory = new Inventory();

  constructor() { }

  // ngOnInit(): void {}

  // saveItem() {
  //   this.invetoryService.addItem(this.inventory).subscribe( data => {
  //     console.log(data);
  //     alert("Inventory Added Successfully")
  //   },
  //   error => {
  //     alert("Fail to Add Inventory")
  //   });
  // }
  // onSubmit() {
  //   console.log(this.inventory);
  //   this.saveItem();
  // }

}