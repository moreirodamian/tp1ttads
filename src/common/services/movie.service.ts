import { Http, URLSearchParams } from '@angular/http';
import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie, MovieInterface } from '@classes/movie';
import 'rxjs/add/operator/toPromise';

@Injectable()
class MovieService {
    private apiKey: string = '7f52d59aee7f8dd981356b2d1a09cd07';
    private apiUrl: string = 'https://api.themoviedb.org/3/';
    
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

    getMovies (query: string, page: number = 1): Promise<void | Movie[]>  {
        const params = this.getParams({
            page: page,
            query: query,
            sort_by: 'popularity.desc'
        });
        
        const url = (query) ? 'search/movie' : 'discover/movie';
        return this.http.get(this.getApiUrl(url), {params: params})
            .toPromise()
            .then(response => response.json().results.map((data: MovieInterface) => new Movie(data)))
            .catch(this.handleError);
    }

    getOneById(movieId: string): Promise<void | any> {
        const params = this.getParams({
        });

        const url = 'movie/' + movieId;
        return this.http.get(this.getApiUrl(url), {params:params})
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    getGuestSessionId(): Promise<void | any>{
            const url = 'authentication/guest_session/new?api_key='+this.apiKey;
            let apiUrl = this.getApiUrl(url);
            return this.http.get(apiUrl)
                .toPromise()
                .then(response => response.json().guest_session_id)
                .catch(this.handleError);
    }

    setRateMovie(movieId: string, MovieValue: number) {
       
        const params = this.getParams({
            value : MovieValue
        });
       
        this.getGuestSessionId()
        .then(id => this.handleMovieRate(id, movieId, MovieValue))
        .catch(this.handleError);
    }

    handleMovieRate(guestSessionID:string, movieId: string, rateValue:number) : void{

        const url = 'movie/' + movieId + '/rating?api_key=' + this.apiKey + '&guest_session_id=' + guestSessionID;
        const params = this.getParams({
            value : rateValue
        });
        this.http.post(this.getApiUrl(url), params)
                    .toPromise()
                    .then(response => response.json())
                    .catch(this.handleError);
    }

    handleError (error:Response): void {
        console.log(error);
    }
}

export { MovieService };