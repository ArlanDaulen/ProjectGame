import { Component, OnInit } from '@angular/core';
import { DataService } from '..//..//data.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  providers: [ DataService ]
})
export class ContentComponent implements OnInit {

  category: any[] = []

    menus = ["/Adventure", "/Race", "/Horror", "/Shooting", "/Survival", "/Top20", "/Top50", "/Top100", "/Action", "/Fighting", "/RPG", "/Sport", "/Strategy", "/Main"];

  constructor(private dataService: DataService) { }

  check(index) {
    if (index == 0) {
      this.category = this.dataService.adventuref()
    } else if (index == 1) {
      this.category = this.dataService.racef()
    } else if (index == 2) {
      this.category = this.dataService.horrorf()
    } else if (index == 3) {
      this.category = this.dataService.shootingf()
    } else if (index == 4) {
      this.category = this.dataService.survivalf()
    } else if (index == 5) {
      this.category = this.dataService.top20f()
    } else if (index == 6) {
      this.category = this.dataService.top50f()
    } else if (index == 7) {
      this.category = this.dataService.top100f()
    } else if (index == 8) {
      this.category = this.dataService.actionf()
    } else if (index == 9) {
      this.category = this.dataService.fightingf()
    } else if (index == 10) {
      this.category = this.dataService.rpgf()
    } else if (index == 11) {
      this.category = this.dataService.sportf()
    } else if (index == 12) {
      this.category = this.dataService.strategyf()
    } else if (index == 13) {
      this.category = this.dataService.mainf()
    }
  }

  ngOnInit(): void {
      this.category = this.dataService.mainf()
  }

}
