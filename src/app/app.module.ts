import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TournamentComponent } from './tournament/tournament.component';
import { GlobalComponent } from './global/global.component';
import { TeamComponent } from './team/team.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TournamentComponent,
    GlobalComponent,
    TeamComponent,
    HomeComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
