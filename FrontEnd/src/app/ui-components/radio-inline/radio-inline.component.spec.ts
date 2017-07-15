import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioInlineComponent } from './radio-inline.component';

describe('RadioInlineComponent', () => {
  let component: RadioInlineComponent;
  let fixture: ComponentFixture<RadioInlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadioInlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioInlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
