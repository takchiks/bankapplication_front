import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminapprovestaffComponent } from './adminapprovestaff.component';

describe('AdminapprovestaffComponent', () => {
  let component: AdminapprovestaffComponent;
  let fixture: ComponentFixture<AdminapprovestaffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminapprovestaffComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminapprovestaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
