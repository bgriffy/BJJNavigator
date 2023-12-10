import { Component, Inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Competition } from '../../models/Competition';

@Component({
  selector: 'app-competitionmodal',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './competitionmodal.component.html',
  styleUrl: './competitionmodal.component.css'
})
export class CompetitionmodalComponent {

  competition!: Competition;

  constructor(public dialogRef: MatDialogRef<CompetitionmodalComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { 
    this.competition = data.competition;
    console.log("competition state:" + this.competition.address.state);
    console.log("competition city:" + this.competition.address.city);
    console.log("competition street:" + this.competition.address.street);
  }

  closeModal() {
    this.dialogRef.close();
  }
}
