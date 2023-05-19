import { createReducer, on } from "@ngrx/store";
import { getProfileAction } from "./profile.action";
import { profileState } from "./profile.state";

export const getPitchIdeaReducer = createReducer(
  profileState ,
      on(getProfileAction,(state,data)=>{
          console.log('data',data);
          return data;
      })
)
