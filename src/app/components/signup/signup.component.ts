import { Component, OnInit } from '@angular/core';
import { ComponentCanDeactivate } from '..//..//guards/exit-signin.guard';
import { Observable } from "rxjs";
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { User } from '..//..//classes/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  //Route Guard
  saved: boolean = false;
  save(){
    this.saved = true;
  }

  canDeactivate() : boolean | Observable<boolean>{
    if(this.saved){
      return confirm("Do you want to leave the page?");
    }else{
      return true;
    }
  }

  myForm : FormGroup = new FormGroup({
    "userName": new FormControl("", Validators.required),
    "userEmail": new FormControl("", [Validators.required, Validators.email]),
    "userPass": new FormControl("", Validators.required)
  });

  submit(){
    console.log('Signed Up');
    console.log(this.myForm);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
