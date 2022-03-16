export  const selectBeer = (id) => {
    return {
        type: "SELECT_BEER",
        payload: id
    }
}

export  const notSelectBeer = (id) => {
    return {
        type: "NOT_SELECT_BEER",
        payload: id
    }
}

export  const sortBeer = (id) => {
    return {
        type: "SORT_BEER",
        payload: id
    }
}

export  const compareBeer = (id) => {
    return {
        type: "COMPARE_BEER",
        payload: id
    }
}

export  const notCompareAllBeer = (id) => {
    return {
        type: "NOT_COMPARE_ALL_BEER",
        payload: id
    }
}

