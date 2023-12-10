import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-competitionmodal',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './competitionmodal.component.html',
  styleUrl: './competitionmodal.component.css'
})
export class CompetitionmodalComponent {

  constructor(public dialogRef: MatDialogRef<CompetitionmodalComponent>) { }

  closeModal() {
    this.dialogRef.close();
  }
}
