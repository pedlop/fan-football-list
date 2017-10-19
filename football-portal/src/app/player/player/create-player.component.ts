import { Player } from './../shared/player';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ToastService } from 'portal-shared';

import { FootballPlayerService } from './../shared/player.service';

@Component({
  selector: 'app-create-player',
  templateUrl: './create-player.component.html',
  styleUrls: ['./create-player.component.scss']
})
export class CreatePlayerComponent implements OnInit {

  addPlayerForm: FormGroup;
  private newPlayer: Player;

  players: any;
  player: any;

  load: boolean;

  constructor(private formBuilder: FormBuilder, private playerService: FootballPlayerService,
              private toastService: ToastService) {
    this.newPlayer = new Player();
    this.load = true;
  }

  ngOnInit() {
    this.addPlayerForm = this.formBuilder.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      age: ['', Validators.required],
      team: ['', Validators.required],
      position: ['', Validators.required],
      situation: ['', Validators.required]
    });
    this.getPlayers();
  }

  onClickAddPlayer() {
    this.load = true;
    this.playerDataInfo();
    this.playerService.create(this.newPlayer).subscribe(
      data => {
        this.getPlayers();
        this.addPlayerForm.reset();
        this.toastService.sucesso('Success', data.message);
      }
    );
  }

  onClickRemovePlayer(id) {
    this.load = true;
    this.playerService.remove(id).subscribe(
      data => {
        // console.log('Player removed!');
        this.getPlayers();
        this.toastService.sucesso('Success', data.message);
      },
      err => {
        // console.log(err);
      }
    );
  }

  private getPlayer() {
    this.playerService.findById('59e7ae809b8704a712f56305').subscribe(
      player => {
        this.player = player.data;
        // console.log(this.players);
      }
    );
  }

  private getPlayers() {
    this.playerService.getAll().subscribe(
      players => {
        // console.log(players.data);
        this.players = players.data;
        this.load = false;
      }
    );
  }

  private playerDataInfo() {
    this.newPlayer.name = this.addPlayerForm.controls.name.value;
    this.newPlayer.lastName = this.addPlayerForm.controls.lastName.value;
    this.newPlayer.age = this.addPlayerForm.controls.age.value;
    this.newPlayer.team = this.addPlayerForm.controls.team.value;
    this.newPlayer.position = this.addPlayerForm.controls.position.value;
    this.newPlayer.situation = this.addPlayerForm.controls.situation.value;
  }

}
