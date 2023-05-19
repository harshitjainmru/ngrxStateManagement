import { createFeatureSelector } from "@ngrx/store";

export const GET_PROFILE_IMAGE = 'get_profile_image';
export const getProfileImageSelector = createFeatureSelector(GET_PROFILE_IMAGE);
