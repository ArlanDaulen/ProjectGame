import { Component, OnInit } from '@angular/core';
import { ComponentCanDeactivate } from '..//..//guards/exit-signin.guard';
import { Observable } from "rxjs";
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { User } from '..//..//classes/user';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  users: User[] = [];

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
//Template-Driven Form
  myForm : FormGroup = new FormGroup({
    "userEmail": new FormControl("", [Validators.required, Validators.email]),
    "userPass": new FormControl("", Validators.required)
  });

  submit(){
    console.log('Signed Up');
    console.log(this.myForm);
  }

    signup : string = "sign up"

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('assets/db.json').subscribe((data:User) => this.users=data["userList"]);
  }

}
