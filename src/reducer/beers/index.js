import * as beersTypes from "./constants";

const defaultState = {
    beersForPage: {
        data: [],
        isLoading: false,
        error: false,
    },
    checkedBeers: {
        data: [],
        isLoading: false,
        error: false,
    }
};

export default function beers(state = defaultState, action) {
    switch (action.type) {
        case beersTypes.GET_BEERS_FOR_PAGE_START: {
            return {
                ...state,
                beersForPage: {
                    data: state?.beersForPage?.data,
                    isLoading: true,
                    error: false
                },
            };
        }
        case beersTypes.GET_BEERS_FOR_PAGE_SUCCESS: {
            return {
                ...state,
                beersForPage: {
                    data: [...state?.beersForPage?.data, ...action.payload],
                    isLoading: false,
                    error: false,
                }
            }
        }
        case beersTypes.GET_BEERS_FOR_PAGE_ERROR: {
            return {
                ...state,
                beersForPage: {
                    data: [],
                    isLoading: false,
                    error: action.payload,
                }
            }
        }

        case beersTypes.CHECKED_BEERS_START: {
            return {
                ...state,
                checkedBeers: {
                    data: state?.checkedBeers?.data,
                    isLoading: true,
                    error: false
                },
            };
        }
        case beersTypes.CHECKED_BEERS_SUCCESS: {
            return {
                ...state,
                checkedBeers: {
                    data: action.payload,
                    isLoading: false,
                    error: false,
                }
            }
        }
        case beersTypes.CHECKED_BEERS_ERROR: {
            return {
                ...state,
                checkedBeers: {
                    data: [],
                    isLoading: false,
                    error: action.payload,
                }
            }
        }
        default:
            return defaultState
    }
}