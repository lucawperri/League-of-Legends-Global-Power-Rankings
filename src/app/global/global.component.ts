import { Component } from '@angular/core';
import { Team } from '../team';
import { TEAMS } from '../mock-teams';

@Component({
  selector: 'app-global',
  templateUrl: './global.component.html',
  styleUrls: ['./global.component.scss']
})
export class GlobalComponent {
  teams: Team[] = [];
  selectedTeam?: Team;
  filteredTeams: Team[] = [];
  page = 1;
  pageSize = 5;

  constructor() {
    this.teams = TEAMS;
    this.filteredTeams = this.teams;
    this.page = 1;
  }

  onSelect(team: Team): void {
    this.selectedTeam = team;
  }

  onSearch(search: string): void {
    if(!search) {
      this.filteredTeams = this.teams;
    }
    this.filteredTeams = this.teams.filter(team => team?.name.toLowerCase().includes(search.toLowerCase()));
  }
}

