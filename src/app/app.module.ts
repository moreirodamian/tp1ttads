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
import { RouterModule, Routes} from '@angular/router';

const routes:Routes = [
    {
        path: 'movie-details/:movieID',
        component: MovieDetailsComponent
    }
]

@NgModule({
    declarations: [
        AppComponent,
        MainViewComponent,
        MoviesListComponent,
        MovieSummaryComponent,
        MovieDetailsComponent
    ],
    imports: [
        BrowserModule,
        CommonLibsModule,
        ComponentsCoreModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(routes)
    ],
    providers: [

    ],
    bootstrap: [
      AppComponent
    ]
})
export class AppModule { }
