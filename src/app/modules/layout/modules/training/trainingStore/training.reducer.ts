import { createReducer, on } from "@ngrx/store";
import { getTrainingAction } from "./training.action";
import { trainingData } from "./training.state";

export const getTrainingReducer = createReducer(
  trainingData ,
      on(getTrainingAction,(state,data)=>{
          console.log(state,"initial state>>>>>>>>",data);

          let newPitchIdea = [...state]
          let pitchData = {
            sNo: newPitchIdea.length+1,
            trainingname: data.training_name,
            timeline: data.timeline,
            date: new Date(),
            status: 'pending',
            action: 'pending',
          };
          newPitchIdea.push(pitchData)

          console.log('listining add pitch>>>',newPitchIdea)
          return newPitchIdea;
      })
)
