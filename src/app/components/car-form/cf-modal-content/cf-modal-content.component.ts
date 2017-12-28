import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-test-modal',
  templateUrl: './cf-modal-content.component.html'
})
export class CFModalContentComponent {
  @Input() requiredFields;

  constructor(public activeModal: NgbActiveModal) {}
}