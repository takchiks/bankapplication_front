import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerAccountApprovalComponent } from './customer-account-approval.component';

describe('CustomerAccountApprovalComponent', () => {
  let component: CustomerAccountApprovalComponent;
  let fixture: ComponentFixture<CustomerAccountApprovalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerAccountApprovalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerAccountApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
