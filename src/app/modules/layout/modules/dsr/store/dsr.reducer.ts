import { createReducer, on } from '@ngrx/store';
import { getAddDsrDataAction, getUpdateDsrDataAction } from './dsr.action';
import { DSRDATA } from './dsr.state';

export const getDsrReducer = createReducer(
  DSRDATA,
  on(getUpdateDsrDataAction, (state, action) => {
    const newState = [...state];
    newState.splice(action.id-1, 1, action.value);
    return newState;
  }),
  on(getAddDsrDataAction,(state,action)=>{
    console.log(state,action);

    return [...state,action]
  })
);
