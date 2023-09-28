import { Component, OnInit } from '@angular/core';
import * as gamesData from '../../data/games.json';

@Component({
  selector: 'app-game-chooser',
  templateUrl: './game-chooser.component.html',
  styleUrls: ['./game-chooser.component.scss']
})
export class GameChooserComponent implements OnInit {
  public games: GameToChoose[] = [];

  ngOnInit() {
    //This is ugly. But the parse from JSON was being weird. I will investigate and clean this up.
    const parsedGames = JSON.parse(JSON.stringify(gamesData));
    for (let i = 0; i < parsedGames.length; i++) {
      this.games.push(parsedGames[i]);
    }
  }
}

export type GameToChoose = {
  name: string;
  igdb_id: string;
  boxArtUrl: string;
};
