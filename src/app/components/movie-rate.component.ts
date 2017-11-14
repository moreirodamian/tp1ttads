import { Component, OnInit, Input } from '@angular/core';
import { MovieService } from "../../common/services/movie.service";
import { Movie } from "../../classes/movie";
import { ActivatedRoute } from '@angular/router';
import {OnClickEvent, OnRatingChangeEven, OnHoverRatingChangeEvent} from "../../../node_modules/angular-star-rating/star-rating-struct";

// SRC: https://www.npmjs.com/package/angular-star-rating


@Component({
    selector: 'movies-rate',
    templateUrl: 'movie-rate.component.html',
    styleUrls: [
        'movie-rate.component.scss'
    ]
})
export class MovieRateComponent {
    @Input() movieId:string;
    @Input() rating:number;

    providers: [MovieService]

    constructor(private movieService:MovieService){
    }

    onClickResult:OnClickEvent;
 
    onClick = ($event:OnClickEvent) => {
        this.sendRate($event.rating);
        this.onClickResult = $event;
    };
    

    sendRate(value:number){
        this.movieService.setRateMovie(this.movieId, value*2);        
    }
 
  

}