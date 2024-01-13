import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Competition } from '../../models/Competition';
import { CompetitionService } from '../../services/competition.service';
import { MatDialog, MatDialogConfig, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { CompetitionmodalComponent } from '../competitionmodal/competitionmodal.component';

@Component({
  selector: 'app-competitionspage',
  standalone: true,
  imports: [CommonModule, MatDialogModule],
  templateUrl: './competitionspage.component.html',
  styleUrl: './competitionspage.component.css'
})
export class CompetitionspageComponent {
  dialogConfig = new MatDialogConfig();
  modalDialog: MatDialogRef<CompetitionmodalComponent, any> | undefined
  competitions: Competition[] = [];

  constructor(private competitionService: CompetitionService, public matDialog: MatDialog) { }

  ngAfterViewInit(): void {
    // document.onclick = (args: any) : void => {
    //       if(args.target.tagName === 'BODY') {
    //           this.modalDialog?.close()
    //       }
    //   }
  }

  ngOnInit(): void {
    this.competitionService.getCompetitions().subscribe((competitions) => this.competitions = competitions);
  }

  openModal(competition: Competition) {
    this.dialogConfig.id = "competition-modal-component";
    this.dialogConfig.width = "800px";
    this.dialogConfig.autoFocus = false;
    this.dialogConfig.data = {
      competition: competition
    };

    this.modalDialog = this.matDialog.open(CompetitionmodalComponent, this.dialogConfig);
  }
}
