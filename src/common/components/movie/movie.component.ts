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

    getRestrictionLabel (): string {
        return (this.movie.isOnlyForAdults()) ? 'Adults only' : 'All public';
    }
}
