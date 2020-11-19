import { Component, OnInit } from '@angular/core';
import { ComponentCanDeactivate } from '..//..//guards/exit-signin.guard';
import { Observable } from "rxjs";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  saved: boolean = false;
  save(){
    this.saved = true;
  }

  canDeactivate() : boolean | Observable<boolean>{
    if(!this.saved){
      return confirm("Do you want to leave the page?");
    }else{
      return true;
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
