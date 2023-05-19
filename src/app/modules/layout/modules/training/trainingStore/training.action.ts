import { createAction, props } from "@ngrx/store";

export const getTrainingAction = createAction(
    '[REQUESTED TRAINING] get training data',
    props<any>()
)
