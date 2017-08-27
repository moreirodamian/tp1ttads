import { Component, Input, OnInit } from '@angular/core';

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
}
