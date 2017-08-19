import { Component, OnInit } from '@angular/core';
import { MovieService } from '@common/services/movie.service';

import { Movie } from '@classes/movie';

@Component({
    selector: 'main-view',
    templateUrl: 'main-view.component.html',
    styleUrls: [
        'main-view.component.scss'
    ]
})
export class MainViewComponent implements OnInit {
    private movies: Movie[];

    providers: [MovieService]

    constructor (private movieService: MovieService) { }

    ngOnInit (): void {
        this.movieService.getMovies()
            .then((movies: Movie[]) => {
                this.movies = movies;
            });
    }
}
