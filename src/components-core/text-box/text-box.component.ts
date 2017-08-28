import { Component, Input } from '@angular/core';

@Component({
    selector: 'text-box',
    templateUrl: 'text-box.component.html',
    styleUrls: [
        'text-box.component.scss'
    ]
})
export class TextBoxComponent {
    @Input() private block: boolean;
    @Input() private disabled: boolean;
    @Input() private placeholder: string;

    getClass (): Object {
        return {
            'text-box': true,
            'text-box_block': (this.block),
            'text-box_disabled': (this.disabled)
        };
    }
}
