import { HttpClient } from '@angular/common/http';
import { Component ,OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  constructor(private _router:Router, private _http:HttpClient ){ }
signup:FormGroup|any;
signuser:any;


  ngOnInit(): void {
   this.signup = new FormGroup({
      'fname': new FormControl('',[Validators.required, Validators.minLength(5)]),
      'email': new FormControl('',[Validators.required,Validators.minLength(6)]),
      'password': new FormControl('', [Validators.required, Validators.minLength(8)])
   })

  }

signupdata(signup:FormGroup){
  //  console.log(this.signup.value);
    this.signuser = this.signup.value.fname
    this._http.post<any>("http://localhost:3000/signup", this.signup.value)
    .subscribe(res=>{
       alert("Data added successfully");
       this.signup.reset();
       this._router.navigate(['']);
    },err=>{
      alert("Something Went wrong");
    })
  }
}