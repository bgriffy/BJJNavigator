import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Gym } from '../../models/Gym';
import { GymService } from '../../services/gym.service';
import { Competition } from '../../models/Competition';

@Component({
  selector: 'app-gymspage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gymspage.component.html',
  styleUrl: './gymspage.component.css'
})
export class GymspageComponent {
  gyms: Competition[] = [];

  constructor(private gymService: GymService) {
  }

  ngOnInit(): void {
    this.gymService.getGyms().subscribe((gyms) => this.gyms = gyms);
  }
}
