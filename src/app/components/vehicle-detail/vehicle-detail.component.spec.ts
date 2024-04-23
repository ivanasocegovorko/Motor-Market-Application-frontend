import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleDetailComponent } from './vehicle-detail.component';

import {RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';
@NgModule({
   declarations:[],
   imports:[RouterModule]
});
describe('VehicleDetailComponent', () => {
  let component: VehicleDetailComponent;
  let fixture: ComponentFixture<VehicleDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VehicleDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VehicleDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
