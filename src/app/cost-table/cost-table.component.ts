import { Component, inject } from '@angular/core';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDialog } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';
import { CostTableUserInputDialog } from '../cost-table-user-input/cost-table-user-input.component';
import { UserService } from '../user.service';

interface CostTableElement {
  date: Date;
  type: string;
  cost: number;
  description: string;
}

@Component({
  selector: 'app-cost-table',
  standalone: true,
  providers: [provideNativeDateAdapter()],
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
  readonly dialog = inject(MatDialog);

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<CostTableElement>();
    this.calculateTotalCostOfTheDay();
    this.loadUsers(); 
  }

  allData: CostTableElement[] = [];
  dateSelected: Date = new Date();
  totalCostOfTheDay: number = 0;
  users: any[] = [];

  onDateSelectedClose(): void {
    this.dataSource.data = this.allData.filter(data => data.date.getDate() == this.dateSelected.getDate());
    this.calculateTotalCostOfTheDay();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CostTableUserInputDialog);

    dialogRef.afterClosed().subscribe(result => {
      if(result != undefined){
        this.allData.push(result);
        this.dataSource.data = this.allData.filter(data => data.date.getDate() == this.dateSelected.getDate());
        this.calculateTotalCostOfTheDay();
      }
    });
  }

  calculateTotalCostOfTheDay(): number {
    this.totalCostOfTheDay = 0;
    this.dataSource.data.forEach(item => {
      this.totalCostOfTheDay = +this.totalCostOfTheDay + +item.cost;
    })
    return 0;
  }

  loadUsers(): void {
    this.userService.getUsers().subscribe(
      data => {
        this.users = data; // 獲取用戶數據並賦值
        console.log(this.users); // 查看用戶數據
      },
      error => {
        console.error('Error fetching users:', error); // 處理錯誤
      }
    );
  }

  dataSource = new MatTableDataSource<CostTableElement>();
  displayedColumns: string[] = ["type", "cost", "description"];
}

