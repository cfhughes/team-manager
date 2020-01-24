import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayersComponent } from './players/players.component';
import { AddplayerComponent } from './addplayer/addplayer.component';


const routes: Routes = [{path:"players/list" , component: PlayersComponent},
                        {path:"players/addplayer", component: AddplayerComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
