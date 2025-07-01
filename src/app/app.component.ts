import { Component } from '@angular/core';
import {
  FormsModule,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
  FormArray,
  FormBuilder
} from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent  {
  userForm!: FormGroup;
  title: string = 'blog-post-manager';

  constructor(private formBuilder: FormBuilder)
   {
 
}

ngOnInit() {
 this.userForm = this.formBuilder.group({
    fName:['jack'],
    password:[''],
   })
}
}
