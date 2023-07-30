import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})

export class AdminLoginComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(private formbuilder: FormBuilder, private _http: HttpClient, private _router: Router) { }

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

  logInn(){
    window.alert('Enter Valid email and password');
    this.loginForm.reset();
  }


}
