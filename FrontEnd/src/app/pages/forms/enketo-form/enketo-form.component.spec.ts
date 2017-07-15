import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnketoFormComponent } from './enketo-form.component';

describe('EnketoFormComponent', () => {
  let component: EnketoFormComponent;
  let fixture: ComponentFixture<EnketoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnketoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnketoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
