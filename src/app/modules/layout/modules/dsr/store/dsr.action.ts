import { createAction, props } from "@ngrx/store";

export const getUpdateDsrDataAction = createAction(
  '[DSR] get dsr data',
  props<any>()
)
export const getAddDsrDataAction = createAction(
  '[ADD NEW] get add data',
  props<any>()
)

