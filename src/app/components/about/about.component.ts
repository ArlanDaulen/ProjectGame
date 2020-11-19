import { Component, OnInit } from '@angular/core';
import { ComponentCanDeactivate } from '..//..//guards/exit-about.guard';
import { Observable } from "rxjs";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
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
  about : string = "Aboout Us"

  constructor() { }

  ngOnInit(): void {
  }

}
