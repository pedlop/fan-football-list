import { Component, OnInit } from '@angular/core';

import { PlayerService } from './../../player/shared/player.service';

@Component({
  selector: 'app-create-team',
  templateUrl: './create-team.component.html',
  styleUrls: ['./create-team.component.scss']
})
export class CreateTeamComponent implements OnInit {

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
    // this.getPlayerByPosition();

  }

  getPlayerByPosition() {
    // this.playerService.findByPosition('Atacante').subscribe(
    //   data => {
    //     console.log(data);
    //   }
    // );
  }

}
