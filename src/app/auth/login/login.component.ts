import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { Router, RouterModule } from '@angular/router';
import { NgxOtpInputModule } from 'ngx-otp-input';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,MatFormFieldModule,MatInputModule,MatRadioModule,ReactiveFormsModule,
    CommonModule,MatIconModule,RouterModule,
    NgxOtpInputModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
}) 
export class LoginComponent   implements OnInit{

  login:FormGroup
  submitted:boolean= false;
  user:any;
  loginErrormsg:boolean= false;
  constructor( private fb:FormBuilder ,  private router:Router){

    this.login = this.fb.group({
      email: ['',[ Validators.required, Validators.email]],
      password:['',[Validators.required]],
    })

  }
  ngOnInit(): void {
    const data = sessionStorage?.getItem('user') ? sessionStorage?.getItem('user') : '' ;
    if (data) this.user = JSON.parse(data);
  }
  get f(){return this.login.controls}
  logins(){

  this.submitted = true;

  if (this.login.invalid) {
    return;
  } else {
    if(this.login.controls['email'].value == this.user?.email && 
    this.login.controls['password'].value == this.user?.password  ){
      localStorage.setItem('user', JSON.stringify(this.user));
      this.router.navigate(['/main/profile'])
    } else {
      this.loginErrormsg = true
    }
  }
  }

}
