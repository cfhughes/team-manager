import { Injectable } from '@angular/core';
import { Player } from './player';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private _httpClient:HttpClient) { }

  getAllplayers(){
    return this._httpClient.get<Player[]>("/players_json");
  }

  addPlayer(player:Player){
    return this._httpClient.post("/players_json",player);
  }

}
