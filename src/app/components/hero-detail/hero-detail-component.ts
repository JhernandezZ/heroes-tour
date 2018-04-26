import { Component, Input, OnDestroy, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Location } from '@angular/common';
import { Store, select, State } from '@ngrx/store';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import * as fromRoot from '../../reducers';
import * as fromHeroes from '../../reducers/heroes';
import * as Heroes from '../../actions/heroes'
import { Hero } from '../../shared/models/heroes';

@Component({
    selector: 'app-hero-detail',
    templateUrl: './hero-detail-component.html',
    styleUrls: ['./hero-detail-component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroDetailComponent implements OnInit{
    hero: Hero;
    constructor(
        private store: Store<fromRoot.State>,
        private route: ActivatedRoute,
        private state: State<fromRoot.State>,
        private location: Location
    ) {}
    
    ngOnInit() {
        this.route.params.subscribe(params => {
            const heroes = this.getHeroList();
            heroes.forEach(
                (item: Hero) => {
                    if (item._nickname === params.heroName) {
                        this.hero = item;
                    }
                }
            );
            
            if (!this.hero) {
                this.back();
            }
        });
    }

    getHeroList(): Array<Hero> {
        return this.state.getValue().heroes.list;
    }

    back() {
        this.location.back();
    }
}
