import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerviewaccountComponent } from './customerviewaccount.component';

describe('CustomerviewaccountComponent', () => {
  let component: CustomerviewaccountComponent;
  let fixture: ComponentFixture<CustomerviewaccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerviewaccountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerviewaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
