import { Component, Input, OnDestroy, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Location } from '@angular/common';
import { Store, select } from '@ngrx/store';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Hero } from '../../shared/models/heroes';

@Component({
    selector: 'app-hero-list-item',
    templateUrl: './hero-list-item.component.html',
    styleUrls: ['./hero-list-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroesListItemComponent {
    @Input() hero: Hero;
    @Input() index: number;

    constructor(private router: Router) {
    }

    heroDetail (nickNmae: string) {
        this.router.navigateByUrl(`hero/${nickNmae}`);
    }
}
