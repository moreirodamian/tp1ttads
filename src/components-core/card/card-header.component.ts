import { Component } from '@angular/core';

@Component({
    selector: 'card-header',
    templateUrl: 'card-header.component.html',
    styleUrls: [
        'card-header.component.scss'
    ]
})
export class CardHeaderComponent {

    getClass (): Object {
        return {
            'card-header': true
        };
    }
}
