import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AllmusicService {

  constructor(private http: HttpClient) {

  }

  getNewReleases() {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQB5zoVqPQM5kVQgY3eobh0XYRdCL2UtlWgjXnpzCNSJ_xB1FxjZDbLeATAh3fQdTmlE7Gh1v_O6VbBWxsY'
    });
    return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers});

  }

}
