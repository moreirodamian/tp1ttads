import { Component, OnInit } from '@angular/core';
import { MovieService } from '@common/services/movie.service';

import { Movie } from '@classes/Movie';

@Component({
    selector: 'main-view',
    templateUrl: 'main-view.component.html',
    styleUrls: [
        'main-view.component.scss'
    ]
})
export class MainViewComponent implements OnInit {

    providers: [MovieService]

    constructor (private movieService: MovieService) { }

    ngOnInit (): void {

    }
}
