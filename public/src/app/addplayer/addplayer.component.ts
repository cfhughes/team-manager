import { Component, OnInit } from "@angular/core";
import { Player } from "../player";
import { PlayerService } from "../player.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-addplayer",
  templateUrl: "./addplayer.component.html",
  styleUrls: ["./addplayer.component.css"]
})
export class AddplayerComponent implements OnInit {
  newPlayer: Player = new Player();
  errors: any = {};

  constructor(private _playerService: PlayerService, private router: Router) {}

  ngOnInit() {}

  addPlayer() {
    this._playerService.addPlayer(this.newPlayer).subscribe((response: any) => {
      if (response.errors) {
        this.errors = response.errors;
      } else {
        this.router.navigate(["players/list"]);
      }
    });
  }
}
