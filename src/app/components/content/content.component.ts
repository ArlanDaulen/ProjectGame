import { Component, OnInit } from '@angular/core';
import { DataService } from '..//..//data.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  providers: [ DataService ]
})
export class ContentComponent implements OnInit {

    menus = ["/Adventure", "/Race", "/Horror", "/Shooting", "/Survival", "/Top20", "/Top50", "/Top100", "/Action", "/Fighting", "/RPG", "/Sport", "/Strategy", "/Main"];

  constructor(private dataService: DataService) { }

  category: any[] = []

  check(index) {
    switch (index) {
      case 0:
        this.category = this.dataService.adventuref();
        break;
      case 1:
        this.category = this.dataService.racef();
        break;
      case 2:
        this.category = this.dataService.horrorf();
        break;
      case 3:
        this.category = this.dataService.shootingf();
        break;
      case 4:
        this.category = this.dataService.survivalf();
        break;
      case 5:
        this.category = this.dataService.top20f();
        break;
      case 6:
        this.category = this.dataService.top50f();
        break;
      case 7:
        this.category = this.dataService.top100f();
        break;
      case 8:
        this.category = this.dataService.actionf();
        break;
      case 9:
        this.category = this.dataService.fightingf();
        break;
      case 10:
        this.category = this.dataService.rpgf();
        break;
      case 11:
        this.category = this.dataService.sportf();
        break;
      case 12:
        this.category = this.dataService.strategyf();
        break;
      case 13:
        this.category = this.dataService.mainf();
        break;
      default:
        break;
    }
  }

  ngOnInit(): void {
      this.category = this.dataService.mainf()
  }

}
