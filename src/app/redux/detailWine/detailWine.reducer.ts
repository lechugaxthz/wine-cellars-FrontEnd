import { createReducer, on } from "@ngrx/store"


export const detailWineInitialState = {
    /* vista detail Wines */
    detailWine: {},
    wineSuggestions: [],
    wineCellarOfDetailWine: {}

}

export const globalReducer = createReducer(
    detailWineInitialState,
)
