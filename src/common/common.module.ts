import { CommonModule } from '@angular/common';
import { ComponentsCoreModule } from '@components-core/components-core.module';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { HeaderComponent } from '@common/components/header/header.component';
import { MovieComponent } from '@common/components/movie/movie.component';
import { MovieService } from '@common/services/movie.service';

@NgModule({
    declarations: [
        HeaderComponent,
        MovieComponent
    ],
    exports: [
        HeaderComponent,
        MovieComponent
    ],
    imports: [
        CommonModule,
        ComponentsCoreModule,
        HttpModule
    ],
    providers: [
        MovieService
    ]
})
export class CommonLibsModule { }
