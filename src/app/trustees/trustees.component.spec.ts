import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrusteesComponent } from './trustees.component';

describe('TrusteesComponent', () => {
  let component: TrusteesComponent;
  let fixture: ComponentFixture<TrusteesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrusteesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrusteesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
