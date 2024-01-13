import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GymmodalComponent } from './gymmodal.component';

describe('GymmodalComponent', () => {
  let component: GymmodalComponent;
  let fixture: ComponentFixture<GymmodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GymmodalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GymmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
