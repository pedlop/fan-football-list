import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamRoutingModule } from './team-routing.module';
import { CreateTeamComponent } from './create-team/create-team.component';
import { TeamService } from './shared/team.service';

@NgModule({
  imports: [
    CommonModule,
    TeamRoutingModule
  ],
  declarations: [CreateTeamComponent],
  exports: [],
  providers: [TeamService]
})
export class TeamModule { }
