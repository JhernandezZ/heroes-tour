import {
    ActionReducer,
    ActionReducerMap,
    createFeatureSelector,
    createSelector,
    MetaReducer
} from '@ngrx/store';

import * as fromHeroes from './heroes';

export interface State {
    heroes: fromHeroes.State,
}

export const reducers: ActionReducerMap<State> = {
    heroes: fromHeroes.reducer
};


export const getHeroesList = (state: State) => state.heroes;
