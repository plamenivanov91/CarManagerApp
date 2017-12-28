import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CarFormComponent } from './components/car-form/car-form.component';
import { CarListComponent } from './components/car-list/car-list.component';

import { CarsDataService } from './services/cars-data.service';
import { CFModalContentComponent } from './components/car-form/cf-modal-content/cf-modal-content.component';
import { CLModalContentComponent } from './components/car-list/cl-modal-content/cl-modal-content.component';

const appRoutes: Routes = [
  {path:'', component: CarListComponent},
  {path:'carForm', component: CarFormComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    CarFormComponent,
    CarListComponent,
    CFModalContentComponent,
    CLModalContentComponent
  ],
  entryComponents: [
    CFModalContentComponent,
    CLModalContentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CarsDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
