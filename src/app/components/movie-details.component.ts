import { Component, OnInit } from '@angular/core';
import { MovieService } from "../../common/services/movie.service";
import { Movie } from "../../classes/movie";

@Component({
    selector: 'movies-details',
    templateUrl: 'movie-details.component.html',
    styleUrls: [
        'movie-details.component.scss'
    ]
})
export class MovieDetailsComponent implements OnInit {

    private selectedMovie:Movie;
    private movieId:string;
    
    constructor(private movieService: MovieService){

    }

    ngOnInit():void{
        this.movieService.getOneById(this.movieId).then(this.loadMovie.bind(this));
    }

    loadMovie(movie:Movie){
        this.selectedMovie=movie;
    }

}