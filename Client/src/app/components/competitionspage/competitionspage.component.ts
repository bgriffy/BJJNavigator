import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Competition } from '../../models/Competition';
import { CompetitionService } from '../../services/competition.service';

@Component({
  selector: 'app-competitionspage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './competitionspage.component.html',
  styleUrl: './competitionspage.component.css'
})
export class CompetitionspageComponent {
   competitions: Competition[] = [];

   constructor(private competitionService: CompetitionService) {
  }

   ngOnInit(): void {
    this.competitionService.getCompetitions().subscribe((competitions) => this.competitions = competitions);
  }
}
