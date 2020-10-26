import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  @Input() searchStr = ''

  ngOnInit(): void {
  }
  constructor() { }
  main : string = "main"
  about : string = "about us"
}
