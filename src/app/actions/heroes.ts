import { Action } from '@ngrx/store';

export enum HeroesActionTypes {
    GetList = '[heroes] Get list success',
    GetListSuccess = '[heroes] Get list success'
}

export class GetList implements Action {
    readonly type = HeroesActionTypes.GetList
}

export class GetListSuccess implements Action {
    readonly type = HeroesActionTypes.GetListSuccess
}

export type HeroesActions = GetList | GetListSuccess;