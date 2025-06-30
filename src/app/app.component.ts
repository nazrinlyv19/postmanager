import { Component } from '@angular/core';
import { FormsModule, FormControl, ReactiveFormsModule, FormGroup, Validator, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title:string = 'blog-post-manager';
   userForm =new FormGroup({
   fName: new FormControl('',[ Validators.required,Validators.minLength(3)]),
   email:new FormControl('',[Validators.required,Validators.email]),
   address:new FormControl('', [Validators.required,Validators.minLength(10)]),
   });

   

   constructor(){
    // console.log(this.fName)
   }

  formSubmit(event:any){
    console.log('form submitted'); 
    console.log(event);
  }
  
  
  getValue(fullName:any){
  console.log(fullName);
  }

  onSubmitR(){
    console.log(this.userForm.get('fName'));
  }




}
