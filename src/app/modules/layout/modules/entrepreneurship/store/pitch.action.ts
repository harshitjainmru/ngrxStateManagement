import { createAction, props } from "@ngrx/store";

export const getPitchIdeaAction = createAction(
    '[PITCH IDEA] get pitch idea data',
    props<any>()
)
