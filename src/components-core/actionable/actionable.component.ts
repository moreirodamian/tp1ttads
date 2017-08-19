import { Component, Input } from '@angular/core';

@Component({
    selector: 'actionable',
    templateUrl: 'actionable.component.html',
    styleUrls: [
        'actionable.component.scss'
    ]
})
export class ActionableComponent {
    @Input() private actionableType: string = 'primary';
    @Input() private block: boolean;
    @Input() private href: string;

    getClass (): Object {
        return {
            'actionable': true,
            'actionable_block': (this.block),
            ['actionable_' + this.actionableType]: (this.actionableType)
        };
    }
}
