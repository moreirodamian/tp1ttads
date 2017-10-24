import { Component, OnInit } from '@angular/core';
import { MovieService } from "../../common/services/movie.service";
import { Movie } from "../../classes/movie";
import { ActivatedRoute } from '@angular/router';
//import {OnClickEvent, OnRatingChangeEven, OnHoverRatingChangeEvent} from "angular-star-rating/src/star-rating-struct";

// NO ANDAAAAAAAAA

// SRC: https://www.npmjs.com/package/angular-star-rating


@Component({
    selector: 'movies-rate',
    templateUrl: 'movie-rate.component.html',
    styleUrls: [
        'movie-rate.component.scss'
    ]
})
export class MovieRateComponent implements OnInit {

    private movie : any;
    private movieId : string;

    providers: [MovieService]
    
    constructor(private movieService: MovieService, private activatedRoute:ActivatedRoute){

    }

    ngOnInit(): void{
        this.movieId=this.activatedRoute.snapshot.params.movieID;
        console.log('Rate component');
        console.log(this.movieId);     
    }

    sendRate(Movieid:string, value:number){
        this.movieService.setRateMovie(Movieid, value)
        
    }

     //  onClickResult:OnClickEvent;
    //  onHoverRatingChangeResult:OnHoverRatingChangeEvent;
   //  onRatingChangeResult:OnRatingChangeEven;
 
    //onClick = ($event:OnClickEvent) => {
   //  console.log('onClick $event: ', $event)
         //this.onClickResult = $event;
    //};
 
   // onRatingChange = ($event:OnRatingChangeEven) => {
      //  console.log('onRatingUpdated $event: ', $event);
        //this.onRatingChangeResult = $event;
  //  };
 
    //onHoverRatingChange = ($event:OnHoverRatingChangeEvent) => {
      //  console.log('onHoverRatingChange $event: ', $event);
        //this.onHoverRatingChangeResult = $event;
    //};

}