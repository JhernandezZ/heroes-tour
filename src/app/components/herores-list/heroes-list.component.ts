import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Store, select } from '@ngrx/store';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import * as fromRoot from '../../reducers';
import * as fromHeroes from '../../reducers/heroes';
import * as Heroes from '../../actions/heroes'
import { Hero } from '../../shared/models/heroes';

@Component({
    selector: 'app-hero-list',
    templateUrl: './heroes-list.component.html',
    styleUrls: ['./heroes-list.component.scss']
})
export class HeroesListComponent {
    heroesList$: Observable<fromHeroes.State>

    constructor(private store: Store<fromRoot.State>) {
        this.heroesList$ = this.store.pipe( select(fromRoot.getHeroesList) );
    }
}
