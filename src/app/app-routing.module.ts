import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TournamentComponent } from './tournament/tournament.component';
import { GlobalComponent } from './global/global.component';
import { TeamComponent } from './team/team.component';

const routes: Routes = [
  { path: 'tournament', component: TournamentComponent },
  { path: 'global', component: GlobalComponent },
  { path: 'team', component: TeamComponent },
  { path: '', redirectTo: '/tournament', pathMatch: 'full' }, // Default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
