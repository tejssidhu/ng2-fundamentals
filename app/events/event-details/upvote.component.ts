import {Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
    selector: 'upvote',
    styleUrls: ['/app/events/event-details/upvote.component.css'],
    template: `
        <div class="votingWidgetContainer pointable" (click)="onClick()">
            <div class="well votingWidget">
                <div class="votingButton">
                    <i class="glyphicon glyphicon-heart" [style.color]="iconColour"></i>
                </div>
            <div class="badge badge-inverse votingCount">
                <div>{{count}}</div>
            </div>
        </div>
    `
})

export class UpVoteComponent {
    @Input() count: number;
    @Input() set voted(val) {
        this.iconColour = val ? 'red' : 'white';
    }
    @Output() vote = new EventEmitter();
    iconColour: string;

    onClick() {
        this.vote.emit({});
    }
}