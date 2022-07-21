import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidateDetailsComponent } from './validate-details.component';

describe('ValidateDetailsComponent', () => {
  let component: ValidateDetailsComponent;
  let fixture: ComponentFixture<ValidateDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidateDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValidateDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
