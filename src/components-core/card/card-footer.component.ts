import { Component } from '@angular/core';

@Component({
    selector: 'card-footer',
    templateUrl: 'card-footer.component.html',
    styleUrls: [
        'card-footer.component.scss'
    ]
})
export class CardFooterComponent {

    getClass (): Object {
        return {
            'card-footer': true
        };
    }
}
