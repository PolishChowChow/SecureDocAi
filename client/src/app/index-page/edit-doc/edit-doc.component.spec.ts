import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDocComponent } from './edit-doc.component';

describe('EditDocComponent', () => {
  let component: EditDocComponent;
  let fixture: ComponentFixture<EditDocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditDocComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
