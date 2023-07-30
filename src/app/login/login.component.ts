import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TransferService } from '../transfer.service';
import { data } from '../shared/models/datav';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(private formbuilder: FormBuilder, private _http: HttpClient, private _router: Router,private ts:TransferService) { }

  ngOnInit(): void {

    this.loginForm = this.formbuilder.group({
      email: ['', [Validators.required, Validators.pattern("[a-z]*[a-z0-9]*@gmail.com")]],
      password: ['', Validators.required]
    }
    );
  }

  logIn() {
    this._http.get<any>('http://localhost:3000/signup').subscribe(res => {
      const user = res.find((a: any) => {
        return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
      })

      if (user) {
        alert('Login Successfully');
        this._router.navigate(['/home']);
        this.loginForm.reset();
      }
      else {
        alert('Enter Valid email and Password');
        this.loginForm.reset();
      }
    })

  }

  ss:data[]=[]
  logInn(){
    if(this.loginForm.value.email==''&&this.loginForm.value.password==''){
      window.alert('Enter Email and Password')
    }

    else{
    this.ss=this.ts.getall().filter(da=>
      da.email.includes(this.loginForm.value.email) && da.password.includes(this.loginForm.value.password)
    )
    
    console.log(this.ss);
    if(!(this.ss.length==0)){
      this._router.navigate(['/home']);
      
    }
    else{
    window.alert('Enter valid Email and Password')
    this.loginForm.reset();
    }
  }
}


}
