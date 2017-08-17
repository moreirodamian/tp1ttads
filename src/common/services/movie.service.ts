import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Movie } from '@classes/Movie';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
class MovieService {
    apiKey: string = '7f52d59aee7f8dd981356b2d1a09cd07';
    apiUrl: string = 'https://api.themoviedb.org/3/';
    
    constructor (private http: Http) { }

    getApiUrl (url: string): string {
        url = this.apiUrl + url;

        if (url.indexOf('?') !== -1) {
            url += '&api_key=' + this.apiKey;
        } else {
            url += '?api_key' + this.apiKey;
        }

        return url;
    }

    getMovies (): Observable<Movie[]>  {

        return this.http.get(this.getApiUrl('discover/movie?sort_by=popularity.desc'))
            .map(response => response.json());
    }
}

export { MovieService };