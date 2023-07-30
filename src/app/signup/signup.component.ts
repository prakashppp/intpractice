import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TransferService } from '../transfer.service';
import { data } from '../shared/models/datav';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit 
{
  signupForm!: FormGroup;
  constructor(private formbuilder: FormBuilder, private _http:HttpClient, private _router:Router, private ts:TransferService) 
  { }


  
  ngOnInit(): void 
  {
    this.signupForm = this.formbuilder.group({
      name:['',[Validators.required,Validators.pattern("[a-zA-Z ]*")]],
      email:['',[Validators.required,Validators.pattern("[a-z]*[a-z0-9]*@gmail.com")]],
      mobile:['',[Validators.required,Validators.pattern("^[7-9][0-9]{9}$")]],
      password: ['',Validators.required],
      cpassword: ['',Validators.required],
    }, {
      validator: this.confirmPasswordMatch('password', 'cpassword')
  })
  }

  signUp()
  {
    this._http.post<any>('http://localhost:3000/signup',this.signupForm.value).subscribe(res=>{
      //console.log(res)
      alert('Signup Successfully');
      this.signupForm.reset();
      this._router.navigate(['/login']);
    })
    // , (err: any)=>{
    //   console.log(err);
    //   alert('Signup Error');
    // }
  }

  signUpp(){
      this.ts.add(new data(this.signupForm.value.email,this.signupForm.value.password))
      this._router.navigate(['/login']);
  }

  confirmPasswordMatch(controlName: string, matchingControlName: string) {    
    return (formGroup: FormGroup) => {
      // console.log(controlName, matchingControlName)
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];

        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ confirmPasswordMatch: true });
        } else {
            matchingControl.setErrors(null);
        }
    }
  }
}
