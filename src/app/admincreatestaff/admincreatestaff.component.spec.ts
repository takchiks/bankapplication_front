import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincreatestaffComponent } from './admincreatestaff.component';

describe('AdmincreatestaffComponent', () => {
  let component: AdmincreatestaffComponent;
  let fixture: ComponentFixture<AdmincreatestaffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmincreatestaffComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmincreatestaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
