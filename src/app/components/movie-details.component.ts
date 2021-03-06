import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from "../../common/services/movie.service";
import { Movie } from "../../classes/movie";
import { MovieRateComponent } from './movie-rate.component';


@Component({
    selector: 'movies-details',
    templateUrl: 'movie-details.component.html',
    styleUrls: [
        'movie-details.component.scss'
    ]
})
export class MovieDetailsComponent implements OnInit {

    private movie : any;
    private movieId : string;

    providers: [MovieService]
    

    constructor(private movieService: MovieService, 
    private activatedRoute:ActivatedRoute, private router:Router){ }

    ngOnInit(): void{
        this.movieId=this.activatedRoute.snapshot.params.movieID;
        this.loadMovie(this.movieId);     
    }

    loadMovie(movieId:string) : void{
        this.movieService.getOneById(this.movieId).then(this.handleMovieLoad.bind(this), this.handleError.bind(this));     
    }

    handleMovieLoad(movie:any) : void{
        if(movie === undefined) return;
        this.movie = movie;
    }

    handleError() : void{
        console.log("An error ocurred when try to load the selected movie.");
    }

    getImageSource (): string {
        return `https://image.tmdb.org/t/p/w342/${this.movie.poster_path}`;
    }


    clickBack(): void{
        this.router.navigate(['/home']);
        }

    sendRate(Movieid:string, value:number){
        this.movieService.setRateMovie(Movieid, value)
    }
}