import { BrowserModule } from '@angular/platform-browser';
import { CommonLibsModule } from '@common/common.module';
import { ComponentsCoreModule } from '@components-core/components-core.module';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from '@app/components/app.component';
import { MainViewComponent } from '@app/components/main-view.component';
import { MoviesListComponent } from '@app/components/movies-list.component';
import { MovieSummaryComponent } from '@app/components/movie-summary.component';
import { MovieDetailsComponent } from '@app/components/movie-details.component';
import { MovieRateComponent } from '@app/components/movie-rate.component';
import { RouterModule, Routes} from '@angular/router';
import { StarRatingModule } from 'angular-star-rating'; //COMPONENTE FEO NOT WORKING

const routes:Routes = [
    {
        path: 'movie-details/:movieID',
        component: MovieDetailsComponent
    },
    {
        path: 'home',
        component: MainViewComponent
    },
    {
        path:'',
        component: MainViewComponent
    }
    //ToDo: Add a PageNotFound component to redirect the path '**'
]

@NgModule({
    declarations: [
        AppComponent,
        MainViewComponent,
        MoviesListComponent,
        MovieSummaryComponent,
        MovieDetailsComponent,
        MovieRateComponent
    ],
    imports: [
        BrowserModule,
        CommonLibsModule,
        ComponentsCoreModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(routes),
        StarRatingModule.forRoot()


    ],
    providers: [

    ],
    bootstrap: [
      AppComponent
    ]
})
export class AppModule { }
