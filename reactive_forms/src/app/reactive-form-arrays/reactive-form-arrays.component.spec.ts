import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormArraysComponent } from './reactive-form-arrays.component';

describe('ReactiveFormArraysComponent', () => {
  let component: ReactiveFormArraysComponent;
  let fixture: ComponentFixture<ReactiveFormArraysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReactiveFormArraysComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveFormArraysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
