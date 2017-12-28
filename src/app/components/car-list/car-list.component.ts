import { Component, OnInit } from '@angular/core';
import { CarsDataService } from '../../services/cars-data.service';
import { Car } from '../../services/car';
import { Router } from "@angular/router";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CLModalContentComponent } from './cl-modal-content/cl-modal-content.component';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})

export class CarListComponent implements OnInit {
  private cars: Car[];
  private page: number = 1;
  private itemsShown: number = 10;
  
  constructor(private modalService: NgbModal, private router: Router, private dataService: CarsDataService) { }

  ngOnInit() {
    this.getCars();
    if(this.dataService.isEditing){
      this.page = this.dataService.lastKnownPage;
    }else if(this.dataService.isAdding){
      this.page = Math.floor(this.cars.length / this.itemsShown) + 1;
    }
    this.dataService.isEditing = false;
    this.dataService.isAdding = false;
  }

  getCars(){
    this.cars = this.dataService.getCarsFromData();
  }

  editCar(car: Car){
    this.dataService.editCar(car, this.page);
    this.goForm();
  }

  initDeletionModalDialog(car: Car){
    const modalRef = this.modalService.open(CLModalContentComponent);
    modalRef.componentInstance.car = car;
  }

  goForm(){
    this.router.navigate(['carForm']);
  }

}
