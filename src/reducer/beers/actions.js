import {
    GET_BEERS_FOR_PAGE_START,
    GET_BEERS_FOR_PAGE_SUCCESS,
    GET_BEERS_FOR_PAGE_ERROR,
} from './constants';

export const getBeers = (params) => async (dispatch, _getState, { beerApi } ) => {
    try {
        console.log(beerApi, "asd")
        dispatch({ type: GET_BEERS_FOR_PAGE_START, payload: [] });
        const data = await beerApi.getBeers(params);
        console.log(data, "datsa");
        dispatch({
            type: GET_BEERS_FOR_PAGE_SUCCESS,
            payload: data
        })
    }
    catch (error) {
        dispatch({
            type: GET_BEERS_FOR_PAGE_ERROR,
            payload: error
        });
    }
}