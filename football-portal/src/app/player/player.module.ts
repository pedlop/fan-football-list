import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { PlayerRoutingModule } from './player-routing.module';
import { CreatePlayerComponent } from './player/create-player.component';
import { PlayerService } from './shared/player.service';
import { LoadingModule } from './../shared/loading/loading.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PlayerRoutingModule,
    LoadingModule
  ],
  declarations: [CreatePlayerComponent],
  exports: [CreatePlayerComponent],
  providers: [PlayerService]
})
export class PlayerModule { }
