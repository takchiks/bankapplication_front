import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomertransferComponent } from './customertransfer.component';

describe('CustomertransferComponent', () => {
  let component: CustomertransferComponent;
  let fixture: ComponentFixture<CustomertransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomertransferComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomertransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
