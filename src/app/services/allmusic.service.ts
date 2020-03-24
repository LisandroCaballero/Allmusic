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
      'Authorization': 'Bearer BQA8GTg-u7-Smnd97OJQRogveHY1VN6dmpfODfkwBIbYR889Klff5lV86Vs-JBlLaq90UM49ABl7EA_SuyA'
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
