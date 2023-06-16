import { createReducer, on } from "@ngrx/store"
import DetailWineCellar from "../../interfaces/detailWC.interface"


const detailWineCellarsInitialState: DetailWineCellar = {
    /* vista detail Wine Cellars */
    wineCellarId: '',
    detailWineCellar: {},
    allWinesOfThisWineCellar: [],
    wineCellarsSuggestions: []

}

export const globalDetailWCReducer = createReducer(
    detailWineCellarsInitialState,
)
