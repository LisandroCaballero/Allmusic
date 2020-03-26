import {Component} from '@angular/core';
import {AllmusicService} from '../../services/allmusic.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {

  artistas: any [] = [];
  loading: boolean;

  constructor(private  allmusic: AllmusicService) {
  }

  buscar(termino: string) {
    this.loading =true;

    this.allmusic.getArtistas(termino)
      .subscribe((data: any) => {
        console.log(data);
        this.artistas = data;
        this.loading = false;
      });
  }

}
