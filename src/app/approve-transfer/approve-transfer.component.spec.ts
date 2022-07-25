import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveTransferComponent } from './approve-transfer.component';

describe('ApproveTransferComponent', () => {
  let component: ApproveTransferComponent;
  let fixture: ComponentFixture<ApproveTransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApproveTransferComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApproveTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
