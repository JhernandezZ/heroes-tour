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
        case HeroesActionTypes.getList:
            return state;
        
        case HeroesActionTypes.getListSuccess:
            state.list = action.payload
            return state;
        
        case HeroesActionTypes.getHero:
            let hero;
            
            state.list.forEach(
                (item: Hero) => {
                    if (item._nickname === action.payload) {
                        hero = item;
                    }
                }
            );
            return hero;
    
        default:
            return state;
    }
}