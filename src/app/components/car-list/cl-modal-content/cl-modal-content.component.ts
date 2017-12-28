import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CarsDataService } from '../../../services/cars-data.service';

@Component({
  selector: 'app-test-modal',
  templateUrl: './cl-modal-content.component.html'
})
export class CLModalContentComponent {
  @Input() car;

  constructor(public activeModal: NgbActiveModal, private dataService: CarsDataService) {}

  deleteCar(){
    this.dataService.removeCar(this.car.id);
  }
}