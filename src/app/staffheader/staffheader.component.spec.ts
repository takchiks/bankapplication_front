import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffheaderComponent } from './staffheader.component';

describe('StaffheaderComponent', () => {
  let component: StaffheaderComponent;
  let fixture: ComponentFixture<StaffheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffheaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaffheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
