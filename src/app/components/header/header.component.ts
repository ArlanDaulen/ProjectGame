import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  ngOnInit(): void {
  }
  constructor() { }
  main : string = "main"
  about : string = "about us"
  signin : string = "sign in"
  signup : string = "sign up"
}
