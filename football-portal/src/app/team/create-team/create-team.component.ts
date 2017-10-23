import { Component, OnInit } from '@angular/core';

import { PlayerService } from './../../player/shared/player.service';
import { TeamService } from './../shared/team.service';
import { tatical } from './../shared/tactical-scheme';

@Component({
  selector: 'app-create-team',
  templateUrl: './create-team.component.html',
  styleUrls: ['./create-team.component.scss']
})
export class CreateTeamComponent implements OnInit {
  taticals: Array<any>;
  teams: any;

  constructor(private playerService: PlayerService, private teamService: TeamService) {
    this.taticals = tatical;
    console.log(this.taticals);
  }

  ngOnInit() {
    // this.getPlayerByPosition();
     this.getTeams();
     
  }

  getPlayerByPosition() {
    // this.playerService.findByPosition('Atacante').subscribe(
    //   data => {
    //     console.log(data);
    //   }
    // );
  }

  onChange(event) {
    const newVal = event.target.value;
    console.log(newVal);
  }

  private getTeams() {
    this.teamService.getAll().subscribe(
      teams => {
        this.teams = teams.data;
        console.log(this.teams);
      }
    );
  }

}
