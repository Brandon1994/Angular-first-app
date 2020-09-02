import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MovieItemComponent } from './movie-item/movie-item.component';
import { MovieListComponent } from './movie-list/movie-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieItemComponent,
    MovieListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
