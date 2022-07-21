import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByAccountNumberComponent } from './by-account-number.component';

describe('ByAccountNumberComponent', () => {
  let component: ByAccountNumberComponent;
  let fixture: ComponentFixture<ByAccountNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ByAccountNumberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ByAccountNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
