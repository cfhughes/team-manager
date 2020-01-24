import { Component, OnInit } from '@angular/core';
import { Player } from '../player';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  players:Player[];

  constructor(private _playerService:PlayerService) { }

  ngOnInit() {
    this._playerService.getAllplayers().subscribe((players)=>{
      this.players = players;
    })
  }

}
