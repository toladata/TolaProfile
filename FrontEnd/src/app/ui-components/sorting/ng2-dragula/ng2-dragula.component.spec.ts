import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng2DragulaComponent } from './ng2-dragula.component';

describe('Ng2DragulaComponent', () => {
  let component: Ng2DragulaComponent;
  let fixture: ComponentFixture<Ng2DragulaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ng2DragulaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng2DragulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
