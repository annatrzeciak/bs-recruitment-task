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
import { SpinnerComponent } from './spinner/spinner.component';
import { RouterModule } from '@angular/router';
import { UserResolve } from './users/user-resolve.service';
import { UserRoutingModule } from './users/users-routing.module';
import { UserEditComponent } from './users/user-edit/user-edit.component';
import { UserDeleteComponent } from './users/user-delete/user-delete.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserAddComponent } from './users/user-add/user-add.component';

@NgModule({
  declarations: [
    AppComponent,MoviesComponent,UsersComponent,UserAddComponent,UserEditComponent,UserDeleteComponent,SpinnerComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AppRoutingModule,
    HttpModule,
    NgxPaginationModule,
    RouterModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [MoviesService,UsersService, UserResolve],
  bootstrap: [AppComponent]
})
export class AppModule { }
