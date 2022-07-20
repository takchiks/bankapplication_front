import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveBeneficaryComponent } from './approve-beneficary.component';

describe('ApproveBeneficaryComponent', () => {
  let component: ApproveBeneficaryComponent;
  let fixture: ComponentFixture<ApproveBeneficaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApproveBeneficaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApproveBeneficaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
