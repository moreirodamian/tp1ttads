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

    onClickResult:OnClickEvent;
    onHoverRatingChangeResult:OnHoverRatingChangeEvent;
    onRatingChangeResult:OnRatingChangeEven;
 
    onClick = ($event:OnClickEvent) => {
        console.log('onClick $event: ', $event);
        console.log("MovieID" + this.movieId);
        this.onClickResult = $event;
    };
 
    onRatingChange = ($event:OnRatingChangeEven) => {
        console.log('onRatingUpdated $event: ', $event);
        this.onRatingChangeResult = $event;
    };
 
    onHoverRatingChange = ($event:OnHoverRatingChangeEvent) => {
        console.log('onHoverRatingChange $event: ', $event);
        this.onHoverRatingChangeResult = $event;
    };

}