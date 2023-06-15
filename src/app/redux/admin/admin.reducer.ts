import { createReducer, on } from "@ngrx/store"


export const adminInitialState = {
    /* admin View */
    page: {
        page: 0,
        perPage: 6,
        totalPages: 0,
    },
    allWines: [],
    allWineCellars: []

}

export const globalReducer = createReducer(
    adminInitialState,
)
