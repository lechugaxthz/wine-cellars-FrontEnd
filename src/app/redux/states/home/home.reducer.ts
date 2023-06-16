import { createReducer, on } from "@ngrx/store"
import Home from "../../interfaces/home.interface"
import * as homeActions from "./home.actions"

const homeInitialState: Home = {
    /* relacionado con homePage */
    page: {
        page: 0,
        perPage: 6,
        totalPages: 0
    },
    winesOrWineCellars: []
}

export const globalHomeReducer = createReducer(
    homeInitialState,
    on(homeActions.getAllWines, state => ({ ...state, page: { page: 1, perPage: 7, totalPages: 10 }, winesOrWineCellars: [{ id: 1 }] }))
)
