import { Http, URLSearchParams } from '@angular/http';
import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie, MovieInterface } from '@classes/movie';
import 'rxjs/add/operator/toPromise';

@Injectable()
class MovieService {
    private apiKey: string = '7f52d59aee7f8dd981356b2d1a09cd07';
    private apiUrl: string = 'https://api.themoviedb.org/3/';
    private guestSessionId: string = null; 
    
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

//LO QUE QUIERO HACER ACA, ES LO SIGUIENTE: SI NO OBTUVE ANTERIORMENTE EL SESSION ID LO PIDO, SINO DEVUELVO EL QUE YA TENGO.
// PERO NO ME ESTARIA FUNCINANDO EL SET
    getGuestSessionId(){
        debugger;
        if(this.guestSessionId!=null)
        {
            return this.guestSessionId;
        } else {
            const url = 'authentication/guest_session/new?api_key='+this.apiKey;
            this.http.get(this.getApiUrl(url))
                .toPromise()
                .then(response => response.json())
                .then(request_token => this.guestSessionId = request_token)
                .catch(this.handleError);
            return this.guestSessionId;
        
        }
    }

    setRateMovie(movieId: string, MovieValue: number) {
       
        const params = this.getParams({
            value : MovieValue
        });
       
        const url = 'movie/'+movieId+'/rating?api_key='+this.apiKey+'&guest_session_id='+this.getGuestSessionId();

        this.http.post(this.getApiUrl(url), params)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    

    handleError (error:Response): void {
        debugger;
        console.log(error);
    }
}

export { MovieService };