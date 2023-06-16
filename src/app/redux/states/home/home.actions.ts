import { createAction, props } from "@ngrx/store";


export const getAllWines = createAction(
    '[Home Page] get wines',
    props<{ url: string }>()
)

export const getDetailWine = createAction(
    '[Home Page] to get the [id] to detail wine. this will save the [id] in other context [detailWine]',
    props<{ id: string }>()
)

export const getDetailWineCellar = createAction(
    '[Home Page] to get the [id] to detail wine. this will save the [id] in other context [detailWineCellar]',
    props<{ id: string }>()
)

