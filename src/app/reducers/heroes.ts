import { HeroesActions, HeroesActionTypes, GetListSuccess } from '../actions/heroes';
import { Hero, EditedHeroes } from '../shared/models/heroes';

export interface State {
    list: Array<Hero>,
    edited: Array<EditedHeroes>
}

const initialState: State = {
    list: [],
    edited: []
}



export function reducer(state: State = initialState, action: HeroesActions): State {
    let newState = state;
    switch (action.type) {
        case HeroesActionTypes.getListSuccess:
            newState.list = action.payload
            return Object.assign({}, newState);
        
        case HeroesActionTypes.updateHero:
            newState.edited.push(action.payload);
            
            newState.edited.forEach(
                (editedHero: EditedHeroes) => {
                    newState.list.forEach(
                        (hero: Hero, index: number) => {
                            if (editedHero.oldValues._nickname === hero._nickname) {
                                newState.list.splice(index, 1, editedHero.newValues)
                            }
                        }
                    );
                }
            );
            return Object.assign({}, state);
    
        default:
            return Object.assign({}, state);
    }
}