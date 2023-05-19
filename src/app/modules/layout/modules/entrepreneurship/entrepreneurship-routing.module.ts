import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  ABS_LAYOUT_ENTREPRENURSHIP,
  ABS_LAYOUT_EXPLORE,
  ABS_LAYOUT_MY_PITCH,
} from 'src/app/constants/absolute-routes';
import { EntrepreneurshipComponent } from './entrepreneurship.component';

const routes: Routes = [
  {
    path: '',
    component: EntrepreneurshipComponent,
    children: [
      {
        path: ABS_LAYOUT_EXPLORE.path,
        loadChildren: () =>
          import('./explore/explore.module').then((m) => m.ExploreModule),
      },
      {
        path: ABS_LAYOUT_ENTREPRENURSHIP.path,
        loadChildren: () =>
          import('./share-your-idea/share-your-idea.module').then(
            (m) => m.ShareYourIdeaModule
          ),
      },
      {
        path: ABS_LAYOUT_MY_PITCH.path,
        loadChildren: () =>
          import('./my-pitch/my-pitch.module').then((m) => m.MyPitchModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EntrepreneurshipRoutingModule {}
