import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerupdateComponent } from './customerupdate.component';

describe('CustomerupdateComponent', () => {
  let component: CustomerupdateComponent;
  let fixture: ComponentFixture<CustomerupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerupdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
