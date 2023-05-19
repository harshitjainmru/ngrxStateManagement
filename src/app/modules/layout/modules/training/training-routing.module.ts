import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  ABS_LAYOUT_MY_TRAINING,
  ABS_LAYOUT_ONGOING_TRAININGS,
  ABS_LAYOUT_REQUESTED_TRAININGS,
  ABS_LAYOUT_TRAINING_DETAILS,
  ABS_LAYOUT_UPCOMING_TRAININGS,
} from 'src/app/constants/absolute-routes';
import { TrainingComponent } from './training.component';

const routes: Routes = [
  {
    path: '',
    component: TrainingComponent,
    children: [
      {
        path: ABS_LAYOUT_UPCOMING_TRAININGS.path,
        loadChildren: () =>
          import('./upcoming-trainings/upcoming-trainings.module').then(
            (m) => m.UpcomingTrainingsModule
          ),
      },
      {
        path: ABS_LAYOUT_ONGOING_TRAININGS.path,
        loadChildren: () =>
          import('./ongoing-training/ongoing-training.module').then(
            (m) => m.OngoingTrainingModule
          ),
      },
      {
        path: ABS_LAYOUT_REQUESTED_TRAININGS.path,
        loadChildren: () =>
          import('./requested-trainings/requested-trainings.module').then(
            (m) => m.RequestedTrainingsModule
          ),
      },
      {
        path: ABS_LAYOUT_MY_TRAINING.path,
        loadChildren: () =>
          import('./my-internal-training/my-internal-training.module').then(
            (m) => m.MyInternalTrainingModule
          ),
      },
      {
        path: `${ABS_LAYOUT_TRAINING_DETAILS.path}/:id`,
        loadChildren: () =>
          import('./upcoming-trainings/details-training/details-training.module').then(
            (m) => m.DetailsTrainingModule
          ),
      },

    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrainingRoutingModule {}
