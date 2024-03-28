import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import { NgxOtpInputConfig, NgxOtpInputModule } from 'ngx-otp-input';
import {MatIconModule} from '@angular/material/icon'
import { RouterModule } from '@angular/router';
import { ConfirmPasswordValidator } from '../confirm-password.validator';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule,MatFormFieldModule,MatInputModule,MatRadioModule,ReactiveFormsModule,
    CommonModule,MatIconModule,RouterModule,
    NgxOtpInputModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent  implements OnInit {

  register:FormGroup;
  submitted:boolean= false;
  otp:boolean = false;
  otpvaleus:any;
  otpsucess:boolean = false;
  otpInputConfig: NgxOtpInputConfig = {
    otpLength: 4,
    autofocus: true,
    classList: {
      inputBox: 'otp-inputs',
      input: 'my-super-class',
      inputFilled: 'my-super-filled-class',
      inputDisabled: 'my-super-disable-class',
      inputSuccess: 'my-super-success-class',
      inputError: 'my-super-error-class',
    },
  };
  constructor(private fb:FormBuilder){
    this.register = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['',[ Validators.required, Validators.email]],
      password:['',[Validators.required]],
      confirmPassword: ["",Validators.required],
      usertype:['',Validators.required]
      
    },
    {
      validator: ConfirmPasswordValidator("password", "confirmPassword")
    }
    )
  }
  ngOnInit(): void {

  }
    // convenience getter for easy access to form fields
    get f() { return this.register.controls; }
    
  sign(){
    this.submitted= true;
         // stop here if form is invalid
         if (this.register.invalid) {
          return;
      } else {
    
        this.otp = true;
   
      }


  }

  
  handeOtpChange(value: string[]): void {
    console.log(value);
    
  }

  handleFillEvent(value: any): void {
    this.otpvaleus = value;

  }
  otpsubmit(){
    if( this.otpvaleus == 1234){
      this.otpsucess = true;
      let obj = {
        firstName:this.register.controls['firstName'].value,
        lastName:this.register.controls['lastName'].value,
        email:this.register.controls['email'].value,
        password:this.register.controls['password'].value,
        usertype:this.register.controls['usertype'].value,
      }
      sessionStorage.setItem('user', JSON.stringify(obj));
    }

  }
}
