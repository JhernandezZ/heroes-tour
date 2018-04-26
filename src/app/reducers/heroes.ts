import { HeroesActions, HeroesActionTypes, GetListSuccess } from '../actions/heroes';
import { Hero } from '../shared/models/heroes';

export interface State {
    list: Array<Hero>
}

const initialState: State = {
    list: []
}

export function reducer(state: State = initialState, action: HeroesActions): State {
    switch (action.type) {
        case HeroesActionTypes.GetList:
            return state;
    
        
        case HeroesActionTypes.GetListSuccess:
            return state;
    
        default:
            return state;
    }
}