import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActionableComponent } from '@components-core/actionable/actionable.component';
import { CardComponent } from '@components-core/card/card.component';
import { CardFooterComponent } from '@components-core/card/card-footer.component';
import { CardHeaderComponent } from '@components-core/card/card-header.component';
import { TextBoxComponent } from '@components-core/text-box/text-box.component';

@NgModule({
    declarations: [
        ActionableComponent,
        CardComponent,
        CardFooterComponent,
        CardHeaderComponent,
        TextBoxComponent
    ],
    exports: [
        ActionableComponent,
        CardComponent,
        CardFooterComponent,
        CardHeaderComponent,
        TextBoxComponent
    ],
    imports: [
        CommonModule
    ],
    providers: [
        
    ]
})
export class ComponentsCoreModule { }
