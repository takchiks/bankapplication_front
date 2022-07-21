import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemovebeneficiaryComponent } from './removebeneficiary.component';

describe('RemovebeneficiaryComponent', () => {
  let component: RemovebeneficiaryComponent;
  let fixture: ComponentFixture<RemovebeneficiaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemovebeneficiaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemovebeneficiaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
