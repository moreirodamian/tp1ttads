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
    private filterText: string;
    private keyPressTimer: any;

    providers: [MovieService]

    constructor (private movieService: MovieService) { }

    handleFilterKeyUp (): void {

        if (this.keyPressTimer) {
            clearTimeout(this.keyPressTimer);
        }

        this.keyPressTimer = setTimeout(() => {
            this.loadMovies();
        }, 200);
    }

    loadMovies (): void {
        this.movieService.getMovies(this.filterText).then(this.handleMoviesLoad.bind(this));
    }
    
    handleMoviesLoad (movies: Movie[]): void {
        this.movies = movies;
    }

    ngOnInit (): void {
        this.loadMovies();
    }
}
