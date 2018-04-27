import { Action } from '@ngrx/store';
import { Hero, EditedHeroes } from '../shared/models/heroes';

export enum HeroesActionTypes {
    getList = '[heroes] Get list',
    getListSuccess = '[heroes] Get list success',
    updateHero = '[herores] Update hero'
}

export class GetList implements Action {
    readonly type = HeroesActionTypes.getList
}

export class GetListSuccess implements Action {
    readonly type = HeroesActionTypes.getListSuccess

    constructor(public payload: Array<Hero>){}
}

export class UpdateHero implements Action {
    readonly type = HeroesActionTypes.updateHero

    constructor(public payload: EditedHeroes) {}
}

export type HeroesActions = GetListSuccess | GetList | UpdateHero;