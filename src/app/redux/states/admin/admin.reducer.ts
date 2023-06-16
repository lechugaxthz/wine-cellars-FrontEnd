import { createReducer, on } from "@ngrx/store"
import { Admin } from "../../interfaces/admin.interface"


const adminInitialState: Admin = {
    /* admin View */
    page: {
        page: 0,
        perPage: 6,
        totalPages: 0,
    },
    allWines: [],
    allWineCellars: []

}

export const globalAdminReducer = createReducer(
    adminInitialState,
)
