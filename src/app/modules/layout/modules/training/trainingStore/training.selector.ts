import { createFeatureSelector } from "@ngrx/store"

export const training = 'training_get_data'
export const getTrainingSelector = createFeatureSelector(training)
