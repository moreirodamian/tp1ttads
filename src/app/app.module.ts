import { BrowserModule } from '@angular/platform-browser';
import { CommonComponentsModule } from 'common-components/common-components.module';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from 'app/app.component';
import { MainViewComponent } from 'app/main-view.component';
import { MoviesListComponent } from 'app/movies-list.component';
import { MovieSummaryComponent } from 'app/movie-summary.component';

@NgModule({
    declarations: [
        AppComponent,
        MainViewComponent,
        MoviesListComponent,
        MovieSummaryComponent
    ],
    imports: [
        BrowserModule,
        CommonComponentsModule,
        FormsModule,
        HttpModule
    ],
    providers: [

    ],
    bootstrap: [
      AppComponent
    ]
})
export class AppModule { }
