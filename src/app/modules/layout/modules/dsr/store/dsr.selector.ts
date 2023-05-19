import { createFeatureSelector, createSelector } from "@ngrx/store"

export const GET_DSR_DATA = 'get_dsr_data'
export const GET_DSR_DATA_SELECTOR = createFeatureSelector(GET_DSR_DATA)
export const getCompleteDsr = createSelector(GET_DSR_DATA_SELECTOR,(state)=>{
  return state
})
