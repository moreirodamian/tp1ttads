import { Http, URLSearchParams } from '@angular/http';
import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie, MovieInterface } from '@classes/movie';
import 'rxjs/add/operator/toPromise';

@Injectable()
class MovieService {
    apiKey: string = '7f52d59aee7f8dd981356b2d1a09cd07';
    apiUrl: string = 'https://api.themoviedb.org/3/';
    
    constructor (private http: Http) { }

    getApiUrl (url: string): string {
        return this.apiUrl + url;
    }

    getParams (paramsData: any): URLSearchParams {
        const keys = Object.keys(paramsData);
        const params = new URLSearchParams();

        params.set('api_key', this.apiKey);

        keys.forEach((key: string) => {
            params.set(key, paramsData[key]);
        });

        return params;
    }

    getMovies (page: number = 1): Promise<void | Movie[]>  {
        const params = this.getParams({
            page: page,
            sort_by: 'popularity.desc'
        });

        return this.http.get(this.getApiUrl('discover/movie'), {params: params})
            .toPromise()
            .then(response => response.json().results.map((data: MovieInterface) => new Movie(data)))
            .catch(this.handleError);
    }

    handleError (): void {

    }
}

export { MovieService };