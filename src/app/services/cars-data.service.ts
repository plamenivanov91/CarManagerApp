import { Injectable } from '@angular/core';
import { Car } from './car';
import { CAR_ITEMS } from './cars-data';

@Injectable()
export class CarsDataService {
  private cItems = CAR_ITEMS;
  private uniqueIDs: number[] = [];
  public isEditing: boolean = false;
  public isAdding: boolean = false;
  public lastKnownPage: number = 1;
  private editedCarIndex: number = 0;

  constructor(){
    this.generateIDs();
    this.removeUsedIDs();
  }

  generateIDs(){
    for(let i = 1; i < 1000; i++){
      this.uniqueIDs.push(i);
    }
  }

  removeUsedIDs(){
    for(let i = 0; i < this.cItems.length; i++){
      for(let j = 0; j < this.uniqueIDs.length; j++){
        if(this.cItems[i].id === this.uniqueIDs[j]){
          this.uniqueIDs.splice(j, 1);
          break;
        }
      }
    }
  }

  getUniqueID(): number{
    let uniqueIndex = Math.floor(Math.random()*this.uniqueIDs.length);
    let uniqueID = this.uniqueIDs[uniqueIndex];
    this.uniqueIDs.splice(uniqueIndex, 1);
    return uniqueID;
  }

  removeCar(id: number){
    let len = this.cItems.length;
    for(let i = 0; i < len; i++){
      if(this.cItems[i].id === id){
        this.cItems.splice(i, 1);
        this.uniqueIDs.push(id);
        break;
      }
    }
  }

  editCar(car: Car, page: number){
    this.lastKnownPage = page;
    this.isEditing = true;
    let len = this.cItems.length;
    for(let i = 0; i < len; i++){
      if(this.cItems[i].id === car.id){
        this.editedCarIndex = i;
        break;
      }
    }
  }

  updateCarData(car: Car){
    this.cItems[this.editedCarIndex] = car;
  }

  getEditedCar(): Car{
    return Object.assign({}, this.cItems[this.editedCarIndex]);
  }

  getCarsFromData(): Car[]{
    return this.cItems;
  }

  addCar(car: Car){
    this.isAdding = true;
    this.cItems.push(car);
  }

}
