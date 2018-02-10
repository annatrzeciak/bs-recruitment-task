import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgxPaginationModule} from 'ngx-pagination';

import { AppComponent } from './app.component';
import { CoreModule } from './core-module/core.module';
import { AppRoutingModule } from './app-routing.module';
import { MoviesComponent } from './movies/movies-list/movies.component';
import { UsersComponent } from './users/users-list/users.component';
import { HttpModule } from '@angular/http';
import { MoviesService } from './services/movies.service';
import { UsersService } from './services/users.service';


@NgModule({
  declarations: [
    AppComponent,MoviesComponent,UsersComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AppRoutingModule,
    HttpModule,
    NgxPaginationModule
  ],
  providers: [MoviesService,UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
