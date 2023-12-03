import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GymspageComponent } from './gymspage.component';

describe('GymspageComponent', () => {
  let component: GymspageComponent;
  let fixture: ComponentFixture<GymspageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GymspageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GymspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
