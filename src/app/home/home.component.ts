import { Component } from '@angular/core';
import { CostTableComponent } from '../cost-table/cost-table.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CostTableComponent],
  templateUrl: './home.component.html' ,
  styleUrl: './home.component.css'
})

export class HomeComponent {

}
