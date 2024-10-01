import { Component } from '@angular/core';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';

interface CostTableElement {
  type: string;
  cost: number;
  description: string;
  date: Date;
}

var ELEMENT_DATA: CostTableElement[] = [
  {type: 'Food', cost: 1000, description: 'some description', date: new Date()},
  {type: 'Clothing', cost: 24500, description: 'some description', date: new Date()}
];

@Component({
  selector: 'app-cost-table',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [MatTableModule, MatButtonModule, MatInputModule, MatDatepickerModule, MatFormFieldModule, MatSelectModule, FormsModule],
  templateUrl: './cost-table.component.html',
  styleUrl: './cost-table.component.css'
})

export class CostTableComponent {
  // Constructor
  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<CostTableElement>();
    ELEMENT_DATA.forEach(data => {
      this.dataSource.data.push(data);
    })
    this.dateInput = new Date();
    this.typeInput = "";
    this.amountInput = 0;
    this.descriptionInput = "";
  }

  appendList(date: Date, type: string, cost: number, description: string): void{
    this.dataSource.data.push({type, cost, description, date});
    this.dataSource.data = this.dataSource.data;
    // Refresh UI input
    this.dateInput = new Date();
    this.typeInput = "";
    this.amountInput = 0;
    this.descriptionInput = "";
    console.log(this.dataSource.data);
  }

  // Variable declaration
  dateInput: Date = new Date();
  typeInput: string = "";
  amountInput: number = 0;
  descriptionInput: string = "";
  dataSource = new MatTableDataSource<CostTableElement>();
  displayedColumns: string[] = ["type", "cost", "description"];
  typesCategory: string[] = ["Food", "Housing", "Clothing", "Transportation"];
}
