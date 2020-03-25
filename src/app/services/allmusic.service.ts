import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AllmusicService {

  constructor(private http: HttpClient) {

  }
  getQuery( query: string) {
    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQC43g49fW2XALJIf6n4w_knwTkumhyBrDmofcgC64gjE8n1QB1Talds8sJdUk-yaf6s42fpHbazcgnDgaY'
    });
    return this.http.get(url, {headers});
  }

  getNewReleases() {

    return this.getQuery('browse/new-releases')
      .pipe( map( data => data['albums'].items));

  }
  getArtista( termino: string){

    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
      .pipe( map( data => data['artists'].items));
  }

}
