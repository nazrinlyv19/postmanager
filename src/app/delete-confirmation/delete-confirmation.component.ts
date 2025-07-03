import { Component, inject, Inject } from '@angular/core';
import { MAT_DIALOG_DATA,MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-confirmation',
  imports: [CommonModule,MatDialogModule],
  standalone:true,
  templateUrl: './delete-confirmation.component.html',
  styleUrl: './delete-confirmation.component.css'
})
export class DeleteConfirmationComponent {
  constructor(
    public dialogRef: MatDialogRef<DeleteConfirmationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { title: string }
  ) {console.log(this.data);}

  onCancel(): void{
    this.dialogRef.close(false);
  }

  onConfirm():void {
    this.dialogRef.close(true);
  }
}
 