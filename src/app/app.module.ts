import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { ArtistaComponent } from './components/artista/artista.component';
import { SearchComponent } from './components/search/search.component';
import { HomeComponent } from './components/home/home.component';
import { ROUTES} from './app.routers';
import { from } from 'rxjs';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

//Servicios
import {AllmusicService} from './services/allmusic.service';
import { NoimagesPipe } from './pipes/noimages.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ArtistaComponent,
    SearchComponent,
    HomeComponent,
    NavbarComponent,
    NoimagesPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot( ROUTES, { useHash: true} )
  ],
  providers: [
    AllmusicService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
