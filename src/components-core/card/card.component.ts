import { Component } from '@angular/core';

@Component({
    selector: 'card',
    templateUrl: 'card.component.html',
    styleUrls: [
        'card.component.scss'
    ]
})
export class CardComponent {

    getClass (): Object {
        return {
            'card': true
        };
    }
}
