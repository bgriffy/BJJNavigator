import { Component, Inject } from '@angular/core';
import { Gym } from '../../models/Gym';
import { MatIconModule } from '@angular/material/icon';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-gymmodal',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './gymmodal.component.html',
  styleUrl: './gymmodal.component.css'
})
export class GymmodalComponent {
  gym!: Gym;

  constructor(public dialogRef: MatDialogRef<GymmodalComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { 
    this.gym = data.gym;
    console.log("competition state:" + this.gym.address.state);
    console.log("competition city:" + this.gym.address.city);
    console.log("competition street:" + this.gym.address.street);
  }

  closeModal() {
    this.dialogRef.close();
  }
}
