import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventDetailPopupComponent } from './event-detail-popup.component';

describe('EventDetailPopupComponent', () => {
  let component: EventDetailPopupComponent;
  let fixture: ComponentFixture<EventDetailPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventDetailPopupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventDetailPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
