import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CLModalContentComponent } from './cl-modal-content.component';

describe('CLModalContentComponent', () => {
  let component: CLModalContentComponent;
  let fixture: ComponentFixture<CLModalContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CLModalContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CLModalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
