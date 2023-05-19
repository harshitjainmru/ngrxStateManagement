import { createFeatureSelector } from "@ngrx/store";

export const GET_PITCH_IDEA = 'get_pitch_idea';
export const getPitchDataSelector = createFeatureSelector(GET_PITCH_IDEA);
