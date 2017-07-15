import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitInlineComponent } from './submit-inline.component';

describe('SubmitInlineComponent', () => {
  let component: SubmitInlineComponent;
  let fixture: ComponentFixture<SubmitInlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitInlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitInlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
