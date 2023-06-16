import { createReducer, on } from "@ngrx/store"
import DetailWine from "../../interfaces/detailWine.interface"


const detailWineInitialState: DetailWine = {
    /* vista detail Wines */
    wineId: '',
    detailWine: {},
    wineSuggestions: [],
    wineCellarOfDetailWine: {}

}

export const globaldetailWReducer = createReducer(
    detailWineInitialState,
)
