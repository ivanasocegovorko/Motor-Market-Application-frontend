import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleNewComponent } from './vehicle-new.component';

describe('VehicleNewComponent', () => {
  let component: VehicleNewComponent;
  let fixture: ComponentFixture<VehicleNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VehicleNewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VehicleNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
