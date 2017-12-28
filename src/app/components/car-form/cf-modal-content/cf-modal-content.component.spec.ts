import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CFModalContentComponent } from './cf-modal-content.component';

describe('CFModalContentComponent', () => {
  let component: CFModalContentComponent;
  let fixture: ComponentFixture<CFModalContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CFModalContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CFModalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
