import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { UserModule } from './user/user.module';
import { PlayerModule } from './player/player.module';
import { LoadingModule } from './shared/loading/loading.module';
import { ToastModule } from 'portal-shared';
import { TeamModule } from './team/team.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    UserModule,
    PlayerModule,
    LoadingModule,
    ToastModule.forRoot(),
    TeamModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
