import { Action } from '@ngrx/store';
import { Hero } from '../shared/models/heroes';

export enum HeroesActionTypes {
    getList = '[heroes] Get list',
    getListSuccess = '[heroes] Get list success'
}

export class GetList implements Action {
    readonly type = HeroesActionTypes.getList
}

export class GetListSuccess implements Action {
    readonly type = HeroesActionTypes.getListSuccess

    constructor(public payload: Array<Hero>){}
}

export type HeroesActions = GetListSuccess | GetList;