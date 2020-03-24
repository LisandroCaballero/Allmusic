import {Component} from '@angular/core';
import {AllmusicService} from '../../services/allmusic.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {

  artistas: any [] = [];

  constructor(private  allmusic: AllmusicService) {
  }

  buscar(termino: string) {
    console.log(termino);
    this.allmusic.getArtista(termino)
      .subscribe((data: any) => {
        console.log(data);
        this.artistas = data;
      });
  }

}
