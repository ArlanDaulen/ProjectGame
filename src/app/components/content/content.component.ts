import { Component, OnInit } from '@angular/core';
import { HttpService } from '..//..//services/http.service';
import { HttpClient } from '@angular/common/http';
import { Game } from '..//..//classes/game';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  searchText: string;

    menus = ["/Adventure", "/Race", "/Horror", "/Shooting", "/Survival", "/Top20", "/Top50", "/Top100", "/Action", "/Fighting", "/RPG", "/Sport", "/Strategy", "/Main"];

  constructor(private http: HttpService, private https: HttpClient) { }

  category: Game[] = [];

  check(index) {
    switch (index) {
      case 0:
        return this.http.getData().subscribe(data => this.category=data["adventure"]);
        break;
      case 1:
        this.http.getData().subscribe(data => this.category=data["race"]);
        break;
      case 2:
        this.http.getData().subscribe(data => this.category=data["horror"]);
        break;
      case 3:
        this.http.getData().subscribe(data => this.category=data["shooting"]);
        break;
      case 4:
        this.http.getData().subscribe(data => this.category=data["survival"]);
        break;
      case 5:
        this.http.getData().subscribe(data => this.category=data["top20"]);
        break;
      case 6:
        this.http.getData().subscribe(data => this.category=data["top50"]);
        break;
      case 7:
        return this.https.get('assets/games.json').subscribe(data => this.category=data["top100"]);
        break;
      case 8:
        this.http.getData().subscribe(data => this.category=data["action"]);
        break;
      case 9:
        this.http.getData().subscribe(data => this.category=data["fighting"]);
        break;
      case 10:
        this.http.getData().subscribe(data => this.category=data["rpg"]);
        break;
      case 11:
        this.http.getData().subscribe(data => this.category=data["sport"]);
        break;
      case 12:
        this.http.getData().subscribe(data => this.category=data["strategy"]);
        break;
      case 13:
        this.http.getData().subscribe(data => this.category=data["main"]);
        break;
      default:
        break;
    }
  }

  ngOnInit(): void {
      this.https.get('assets/games.json').subscribe((data: Game) => this.category = data["top100"]);
  }

}
