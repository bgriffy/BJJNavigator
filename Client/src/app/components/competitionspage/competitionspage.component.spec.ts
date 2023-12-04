import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitionspageComponent } from './competitionspage.component';

describe('CompetitionspageComponent', () => {
  let component: CompetitionspageComponent;
  let fixture: ComponentFixture<CompetitionspageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompetitionspageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompetitionspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
