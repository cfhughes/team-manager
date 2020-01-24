import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PlayersComponent } from "./players/players.component";
import { AddplayerComponent } from "./addplayer/addplayer.component";
import { PlayerService } from "./player.service";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [AppComponent, PlayersComponent, AddplayerComponent],
  imports: [BrowserModule,
     AppRoutingModule, 
     FormsModule, 
     HttpClientModule],
  providers: [PlayerService],
  bootstrap: [AppComponent]
})
export class AppModule {}
