import { FETCH_WEATHER } from'../actions/index';

export default function(state = [], action){

    switch (action.type){
        case FETCH_WEATHER:
            return [ action.payload.data,...state ];//always return a new array when working with state, and do not mutate it (array.push will mutate an array)

    }

    return state;
}