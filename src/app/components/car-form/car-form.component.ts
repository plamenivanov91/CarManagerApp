import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { CarsDataService } from '../../services/cars-data.service';
import { CFModalContentComponent } from './cf-modal-content/cf-modal-content.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.css']
})

export class CarFormComponent implements OnInit {
  private newCar: any = {};
  private isValid: boolean = true;
  private invalidFields: string[] = [];
  private headerMessege: string = 'Add New';
  private requiredFields: string[] = ['brand', 'model', 'registrationNumber', 'fuelType', 'transmission'];

  public fTypes = [
    { value: 'Petrol'},{ value: 'Diesel'},{ value: 'Electric'}
  ]

  public transmissions = [
    { value: 'Manual'},{ value: 'Automatic'},{ value: 'Semi-Automatic'}
  ]

  constructor(private modalService: NgbModal, private router: Router, private dataService: CarsDataService) { }

  ngOnInit() {
    if(this.dataService.isEditing){
      this.headerMessege = 'Update Existing';
      this.newCar = this.dataService.getEditedCar();
    }
  }

  goHome() {
    this.router.navigate(['']);
  }

  carValidation() {
    let len = this.requiredFields.length;
    let arr = this.requiredFields;
    for(let i = 0; i < len; i++){
      if (this.newCar[arr[i]] === undefined || this.newCar[arr[i]] === ''){
        this.isValid = false;
        this.invalidFields.push(arr[i]);
      }
    }
  }

  addCarToData() {
    this.carValidation();
    if (this.isValid) {
      if(this.dataService.isEditing){
        this.dataService.updateCarData(this.newCar);
      }else{
        this.newCar['id'] = this.dataService.getUniqueID();
        this.dataService.addCar(this.newCar);
      }
      this.router.navigate(['']);
    } else {
      const modalRef = this.modalService.open(CFModalContentComponent);
      modalRef.componentInstance.requiredFields = this.invalidFields;
    }
    this.isValid = true;
    this.invalidFields = [];
  }

}
