import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormsModule,
  FormGroup,
  ReactiveFormsModule,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { Post } from './models/post.model';
import { PostService } from './services/post.service';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { EditPostComponent } from './edit-post/edit-post.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { DeleteConfirmationComponent } from './delete-confirmation/delete-confirmation.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule,CommonModule,MatDialogModule,EditPostComponent,MatIconModule,MatButtonModule,DeleteConfirmationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent  {
  postForm!: FormGroup;
  title: string = 'blog-post-manager';

  constructor(private fb: FormBuilder, private postService: PostService,private dialog:MatDialog){}

ngOnInit() {
 this.postForm = this.fb.group({
    title:['',Validators.required],
    content:['',Validators.required],
    optionalData:['']
   })
}

onSubmit(){
  if (this.postForm.valid) {
    this.postService.addPost(this.postForm.value);
    this.postForm.reset();
    
  }
}

get posts():Post[] {
  return this.postService.getPosts();
}
onDelete(id: number) {
  const dialogRef = this.dialog.open(DeleteConfirmationComponent, {
    data: { message: 'Are you sure you want to delete this post?' },
  });

  dialogRef.afterClosed().subscribe((confirmed: boolean) => {
    if (confirmed) {
      this.postService.deletePost(id);
    }
  });
}

onEdit(post:Post){
const dialogRef= this.dialog.open(EditPostComponent,{
  data: {
    title: post.title,
    content: post.content,
    optionalData: post.optionalData}
});
dialogRef.afterClosed().subscribe(updatedData => {
  if (updatedData) {
    const updatedPost: Post ={
      ...post,
      ...updatedData
    };
    this.postService.updatePost(updatedPost);
  }
});
}








}
