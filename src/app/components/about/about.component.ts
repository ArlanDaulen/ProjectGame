import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  about : string = "About Us"
  comments: any[] = []

  addComment(value: string){
    this.comments.push(value)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
