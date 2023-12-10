import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitionmodalComponent } from './competitionmodal.component';

describe('CompetitionmodalComponent', () => {
  let component: CompetitionmodalComponent;
  let fixture: ComponentFixture<CompetitionmodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompetitionmodalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompetitionmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
