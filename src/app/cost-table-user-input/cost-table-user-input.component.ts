import { Component, inject, model, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';

@Component({
  selector: 'cost-table-user-input',
  templateUrl: 'cost-table-user-input.component.html',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
  ],
})

export class CostTableUserInputDialog {
  readonly dialogRef = inject(MatDialogRef<CostTableUserInputDialog>);

  typesCategory: string[] = ["Food", "Housing", "Clothing", "Transportation"];

  dateInput: Date = new Date();
  typeInput: string = "";
  amountInput: number = 0;
  descriptionInput: string = "";

  onCancelClick(): void {
    this.dialogRef.close();
  }

  onOkayClick(): void {
    this.dialogRef.close({date: this.dateInput, type: this.typeInput, cost: this.amountInput, description: this.descriptionInput})
  }
}
