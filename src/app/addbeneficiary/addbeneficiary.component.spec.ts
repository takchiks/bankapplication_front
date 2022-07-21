import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddbeneficiaryComponent } from './addbeneficiary.component';

describe('AddbeneficiaryComponent', () => {
  let component: AddbeneficiaryComponent;
  let fixture: ComponentFixture<AddbeneficiaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddbeneficiaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddbeneficiaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
