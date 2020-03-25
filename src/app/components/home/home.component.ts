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
  constructor(private allmusic: AllmusicService) {
    this.loading = true;

    this.allmusic.getNewReleases()
      .subscribe( (data: any) => {
        this.nuevasCanciones = data;
        this.loading = false;
      });
  }
}
