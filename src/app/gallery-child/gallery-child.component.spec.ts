import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryChildComponent } from './gallery-child.component';

describe('GalleryChildComponent', () => {
  let component: GalleryChildComponent;
  let fixture: ComponentFixture<GalleryChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GalleryChildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalleryChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
