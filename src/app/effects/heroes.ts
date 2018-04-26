import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { HeroesActionTypes, GetList, GetListSuccess } from '../actions/heroes';
import { Hero } from '../shared/models/heroes';
import { HeroesService } from '../shared/services/heroes.service';

@Injectable()
export class HeroesEffects {

    constructor(private actions$: Actions, private heroesService: HeroesService) { }

    @Effect()
    login$: Observable<Action> = this.actions$.pipe(
        ofType<GetList>(HeroesActionTypes.getList),
        switchMap(() => {
            return this.heroesService
                .getHeroList()
                .pipe(
                    map((heroesData: Array<Hero>) => {
                    return new GetListSuccess(heroesData);
                    })
                );
        })
    );
}
