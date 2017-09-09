import { Component, OnInit } from '@angular/core';
import { MovieService } from "../../common/services/movie.service";
import { Movie } from "../../classes/movie";
import { ActivatedRoute } from '@angular/router';

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

    providers: [MovieService]
    
    constructor(private movieService: MovieService, private activatedRoute:ActivatedRoute){

    }

    ngOnInit(): void{
        console.log(this.activatedRoute.snapshot.params.movieID);
        this.movieId = this.activatedRoute.snapshot.params.movieID;
        this.movieService.getOneById(this.movieId).then(this.loadMovie.bind(this));
    }

    loadMovie(movie:Movie): void{
        this.selectedMovie=movie;
        console.log(this.selectedMovie);
    }

}