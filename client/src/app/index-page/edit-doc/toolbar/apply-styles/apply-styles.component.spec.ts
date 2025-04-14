import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyStylesComponent } from './apply-styles.component';

describe('ApplyStylesComponent', () => {
  let component: ApplyStylesComponent;
  let fixture: ComponentFixture<ApplyStylesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApplyStylesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplyStylesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
