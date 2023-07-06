import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  login:FormGroup|any;
signup: string|any[]|null|undefined;
  constructor(private _router:Router, private _http:HttpClient){ }

ngOnInit(): void {
    this.login = new FormGroup({
      'fname': new FormControl('',[Validators.required, Validators.minLength(5)]),
      'password': new FormControl()
    })
}
logindata(login:FormGroup){
  this._http.get<any>("http://localhost:3000/signup")
  .subscribe(res=>{
    const user =res.find((a:any)=>{
      return a.fname === this.login.value.fname && a.password === this.login.value.password
    });
    if (user){
      alert("You are Successfully login");
      this.login.reset();
      this._router.navigate(['dash']);
    }else{
      alert('User Not Found');
      this._router.navigate(['']);
    }


  }), (_err: any)=>{
    alert('Something was Wrong');
  }

}
}
