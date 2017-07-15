import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectInlineComponent } from './select-inline.component';

describe('SelectInlineComponent', () => {
  let component: SelectInlineComponent;
  let fixture: ComponentFixture<SelectInlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectInlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectInlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
