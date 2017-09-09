import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Movie } from '@classes/movie';

@Component({
    selector: 'movie',
    templateUrl: 'movie.component.html',
    styleUrls: [
        'movie.component.scss'
    ]
})
export class MovieComponent implements OnInit {
    @Input() movie: Movie;

    constructor(private _router:Router){

    }

    ngOnInit () {
        console.log(this.movie);
    }

    getClass (): Object {
        return {
            'movie': true
        };
    }

    getImageSource (): string {
        return `https://image.tmdb.org/t/p/w342/${this.movie.posterPath}`;
    }

    showDetails (movieId:string): void{
        this._router.navigate(['/movie-details', movieId]);
    }
}
