import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreatePlayerComponent } from './player/create-player.component';

const routes: Routes = [
  {
    path: 'players',
    component: CreatePlayerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FootballPlayerRoutingModule { }
