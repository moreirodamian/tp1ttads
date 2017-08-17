import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { HeaderComponent } from '@common/components/header.component';
import { MovieService } from '@common/services/movie.service';

@NgModule({
    declarations: [
        HeaderComponent
    ],
    exports: [
        HeaderComponent
    ],
    imports: [
        HttpModule
    ],
    providers: [MovieService]
})
export class CommonModule { }
