import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AllmusicService} from '../../services/allmusic.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent  {

nuevasCanciones: any [] = [];

loading: boolean;
error: boolean;
mesajeError: string;

  constructor(private allmusic: AllmusicService) {
    this.loading = true;
    this.error = false;

    this.allmusic.getNewReleases()
      .subscribe( (data: any) => {
        this.nuevasCanciones = data;
      }, ( errorServicio)=> {
        this.loading = false;
        this.error = true;
        this.mesajeError = errorServicio.error.error.message;

      } );
  }
}
