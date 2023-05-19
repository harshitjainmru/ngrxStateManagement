import { createReducer, on } from "@ngrx/store";
import { getPitchIdeaAction } from "./pitch.action";
import { pitchIdea } from "./pitch.state";

export const getPitchIdeaReducer = createReducer(
  pitchIdea ,
      on(getPitchIdeaAction,(state,data)=>{

          console.log("initial state>>>>>>>>",state);
        console.log(data.pitch_title,'title');


          let newPitchIdea = [...state]
          let pitchData = {
            sNo: newPitchIdea.length+1,
              title: data.pitch_title,
              industry: data.industry,
              typeIndustry: data.pitch_type,
              date: new Date(),
              download: '-',
          };
          newPitchIdea.push(pitchData)

          console.log('listining add pitch>>>',newPitchIdea)
          return newPitchIdea;
      })
)
