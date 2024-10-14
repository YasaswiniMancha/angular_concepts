import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgstyleDirectiveComponent } from './ngClassAndStyle-directive.component';

describe('NgstyleDirectiveComponent', () => {
  let component: NgstyleDirectiveComponent;
  let fixture: ComponentFixture<NgstyleDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgstyleDirectiveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgstyleDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
