import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Gym } from '../../models/Gym';
import { GymService } from '../../services/gym.service';

@Component({
  selector: 'app-gymspage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gymspage.component.html',
  styleUrl: './gymspage.component.css'
})
export class GymspageComponent {
  gyms: Gym[] = [];

  constructor(private gymService: GymService) {
  }

  ngOnInit(): void {
    this.gymService.getGyms().subscribe((gyms) => this.gyms = gyms);
  }
}
