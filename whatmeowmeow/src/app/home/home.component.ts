import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';

export interface PeriodicElement {
  type: string;
  cost: number;
  description: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {type: 'Food', cost: 1000, description: 'some description'},
  {type: 'Clothing', cost: 24500, description: 'some description'}
];

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './home.component.html' ,
  styleUrl: './home.component.css'
})

export class HomeComponent {
  displayedColumns: string[] = ['type', 'cost', 'description'];
  dataSource = ELEMENT_DATA;
}
