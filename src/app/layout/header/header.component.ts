import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { faGithub, faAngular } from '@fortawesome/free-brands-svg-icons';

@Component({
    selector: 'todo-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    @Input() authenticated: boolean;
    @Output() signOut = new EventEmitter(false);

    faGithub = faGithub;
    faAngular = faAngular;

    constructor() { }

    ngOnInit() {
    }
}
