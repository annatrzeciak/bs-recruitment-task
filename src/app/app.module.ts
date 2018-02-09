import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CoreModule } from './core-module/core.module';
import { AppRoutingModule } from './app-routing.module';
import { MoviesComponent } from './movies/movies-list/movies.component';
import { UsersComponent } from './users/users-list/users.component';


@NgModule({
  declarations: [
    AppComponent,MoviesComponent,UsersComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
