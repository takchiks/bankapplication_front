import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersRegisteredComponent } from './customers-registered.component';

describe('CustomersRegisteredComponent', () => {
  let component: CustomersRegisteredComponent;
  let fixture: ComponentFixture<CustomersRegisteredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomersRegisteredComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomersRegisteredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
