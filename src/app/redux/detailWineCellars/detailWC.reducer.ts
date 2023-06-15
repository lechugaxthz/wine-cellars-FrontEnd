import { createReducer, on } from "@ngrx/store"


export const detailWineCellarsInitialState = {
    /* vista detail Wine Cellars */
    detailWineCellar: {},
    allWinesOfThisWineCellar: [],
    wineCellarsSuggestions: []

}

export const globalReducer = createReducer(
    detailWineCellarsInitialState,
)
