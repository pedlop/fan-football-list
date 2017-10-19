import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { FootballPlayerRoutingModule } from './player-routing.module';
import { CreatePlayerComponent } from './player/create-player.component';
import { FootballPlayerService } from './shared/player.service';
import { LoadingModule } from './../shared/loading/loading.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FootballPlayerRoutingModule,
    LoadingModule
  ],
  declarations: [CreatePlayerComponent],
  exports: [CreatePlayerComponent],
  providers: [FootballPlayerService]
})
export class FootballPlayerModule { }
