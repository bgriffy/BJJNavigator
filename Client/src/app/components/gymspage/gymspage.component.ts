import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Gym } from '../../models/Gym';
import { GymService } from '../../services/gym.service';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { GymmodalComponent } from '../gymmodal/gymmodal.component';

@Component({
  selector: 'app-gymspage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gymspage.component.html',
  styleUrl: './gymspage.component.css'
})
export class GymspageComponent {

  dialogConfig = new MatDialogConfig();
  modalDialog: MatDialogRef<GymmodalComponent, any> | undefined
  gyms: Gym[] = [];

  constructor(private gymService: GymService, public matDialog: MatDialog) { }

  ngOnInit(): void {
    this.gymService.getGyms().subscribe((gyms) => this.gyms = gyms);
  }

  openModal(gym: Gym) {
    this.dialogConfig.id = "competition-modal-component";
    this.dialogConfig.width = "800px";
    this.dialogConfig.autoFocus = false;
    this.dialogConfig.data = {
      gym: gym
    };
    
    this.modalDialog = this.matDialog.open(GymmodalComponent, this.dialogConfig);
  }
}
