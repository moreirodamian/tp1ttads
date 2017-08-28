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

@NgModule({
    declarations: [
        AppComponent,
        MainViewComponent,
        MoviesListComponent,
        MovieSummaryComponent
    ],
    imports: [
        BrowserModule,
        CommonLibsModule,
        ComponentsCoreModule,
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
