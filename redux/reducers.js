import {SELECT_BEER, NOT_SELECT_BEER, SORT_BEER, COMPARE_BEER, NOT_COMPARE_ALL_BEER} from "./constants"

const initialState = {
    beers: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_BEER:
            return {
                beers: state.beers.map(beer => {
                    (beer.id === action.id)
                        ? {...beer, comleted: !beer.comleted}
                        : beer
                })
            }
    }
}

export default reducer;
