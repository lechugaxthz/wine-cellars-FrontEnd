import { createAction, props } from "@ngrx/store";


export const getAllWines = createAction(
    '[Home Page] get wines',
    props<{ url: string }>()
)

export const getDetailWine = createAction(
    '[Home Page] to get the detail wine of all wines',
    props<{ id: string }>()
)

