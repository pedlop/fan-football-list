import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { TeamRoutingModule } from './team-routing.module';
import { CreateTeamComponent } from './create-team/create-team.component';
import { TeamService } from './shared/team.service';

@NgModule({
  imports: [
    CommonModule,
    TeamRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CreateTeamComponent],
  exports: [],
  providers: [TeamService]
})
export class TeamModule { }
