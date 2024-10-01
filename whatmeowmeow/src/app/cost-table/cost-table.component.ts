import { Component } from '@angular/core';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

interface CostTableElement {
  type: string;
  cost: number;
  description: string;
}

var ELEMENT_DATA: CostTableElement[] = [
  {type: 'Food', cost: 1000, description: 'some description'},
  {type: 'Clothing', cost: 24500, description: 'some description'}
];

@Component({
  selector: 'app-cost-table',
  standalone: true,
  imports: [MatTableModule, MatButtonModule, MatInputModule, FormsModule],
  templateUrl: './cost-table.component.html',
  styleUrl: './cost-table.component.css'
})

export class CostTableComponent {
  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<CostTableElement>();
    ELEMENT_DATA.forEach(data => {
      this.dataSource.data.push(data);
    })
  }

  appendList(type: string, cost: number, description: string): void{
    this.dataSource.data.push({type, cost, description});
    this.dataSource.data = this.dataSource.data;
    this.typeInput = "";
    this.amountInput = 0;
    this.descriptionInput = "";
  }

  typeInput: string = "";
  amountInput: number = 0;
  descriptionInput: string = "";
  dataSource = new MatTableDataSource<CostTableElement>();
  displayedColumns: string[] = ['type', 'cost', 'description'];
}
