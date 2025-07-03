import { Component, Inject } from '@angular/core';
import { FormBuilder,FormGroup,Validators,ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA,MatDialogModule,MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-post',
  imports: [CommonModule,ReactiveFormsModule,MatDialogModule],
  templateUrl: './edit-post.component.html',
  styleUrl: './edit-post.component.css'
})
export class EditPostComponent {
editForm!:FormGroup;
constructor(private fb:FormBuilder, public dialogRef:MatDialogRef<EditPostComponent>, @Inject(MAT_DIALOG_DATA) public data: {title:string,content:string,optionalData?:string}){
  this.editForm=this.fb.group({
    title: [data.title, Validators.required],
    content: [data.content, Validators.required],
    optionalData: [data.optionalData || '']
  })
}

onCancel():void{
this.dialogRef.close();
}

onSave():void{
  if (this.editForm.valid) {
    this.dialogRef.close(this.editForm.value);
  }
}

}
