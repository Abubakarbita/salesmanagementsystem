import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryManagentComponent } from './inventory-managent.component';

describe('InventoryManagentComponent', () => {
  let component: InventoryManagentComponent;
  let fixture: ComponentFixture<InventoryManagentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventoryManagentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventoryManagentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
