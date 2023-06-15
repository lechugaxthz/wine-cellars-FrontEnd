import { createReducer, on } from "@ngrx/store"


export const homeInitialState = {
    /* relacionado con homePage */
    winesOrWineCellars: [],
    page: {
        page: 0,
        perPage: 6,
        totalPages: 0,
    }

}

export const globalReducer = createReducer(
    homeInitialState,
)
