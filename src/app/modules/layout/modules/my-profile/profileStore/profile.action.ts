import { createAction, props } from "@ngrx/store";

export const getProfileAction = createAction(
  '[PROFILE IMAGE] get profile image data',
  props<any>()
)
