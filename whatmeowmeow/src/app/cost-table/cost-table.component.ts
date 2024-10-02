import { Component, inject, model, signal } from '@angular/core';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDialog } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import {CostTableUserInputDialog} from '../cost-table-user-input/cost-table-user-input.component';

interface CostTableElement {
  date: Date;
  type: string;
  cost: number;
  description: string;
}

@Component({
  selector: 'app-cost-table',
  standalone: true,
  imports: [
    MatTableModule,
    MatButtonModule,
    MatInputModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule
  ],
  templateUrl: './cost-table.component.html',
  styleUrl: './cost-table.component.css'
})

export class CostTableComponent {
  // Constructor
  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<CostTableElement>();
  }

  readonly dialog = inject(MatDialog);

  openDialog(): void {
    const dialogRef = this.dialog.open(CostTableUserInputDialog);

    dialogRef.afterClosed().subscribe(result => {
      if(result != undefined){
        this.dataSource.data.push(result);
        this.dataSource.data = this.dataSource.data;
      }
    });
  }

  dataSource = new MatTableDataSource<CostTableElement>();
  displayedColumns: string[] = ["type", "cost", "description"];
}

