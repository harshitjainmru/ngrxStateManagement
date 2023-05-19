import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  ABS_LAYOUT_DIRECTORY,
  ABS_LAYOUT_ENTREPRENURSHIP,
  ABS_LAYOUT_HOME,
  ABS_LAYOUT_JOB_OPENING,
  ABS_LAYOUT_MYPROFILE,
  ABS_LAYOUT_MY_PERFORMANCE,
  ABS_LAYOUT_PROJECT,
  ABS_LAYOUT_REFER_LIST,
} from 'src/app/constants/absolute-routes';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: ABS_LAYOUT_HOME.fullUrl, pathMatch: 'full' },
      {
        path: ABS_LAYOUT_HOME.path,
        loadChildren: () =>
          import('./modules/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: ABS_LAYOUT_MYPROFILE.path,
        loadChildren: () =>
          import('./modules/my-profile/my-profile.module').then(
            (m) => m.MyProfileModule
          ),
      },
      {
        path: ABS_LAYOUT_DIRECTORY.path,
        loadChildren: () =>
          import('./modules/directory/directory.module').then(
            (m) => m.DirectoryModule
          ),
      },
      {
        path: '',
        loadChildren: () =>
          import('./modules/food/food.module').then(
            (m) => m.FoodModule
          ),
      },
      {
        path: '',
        loadChildren: () =>
          import('./modules/entrepreneurship/entrepreneurship.module').then(
            (m) => m.EntrepreneurshipModule
          ),
      },
      {
        path: '',
        loadChildren: () =>
          import('./modules/my-links/my-links.module').then(
            (m) => m.MyLinksModule
          ),
      },
      {
        path: '',
        loadChildren: () =>
          import('./modules/refer-afriend/refer-afriend.module').then(
            (m) => m.ReferAFriendModule
          ),
      },
      {
        path: '',
        loadChildren: () =>
          import('./modules/reviews/reviews.module').then(
            (m) => m.ReviewsModule
          ),
      },
      {
        path: '',
        loadChildren: () =>
          import('./modules/recruitment/recruitment.module').then(
            (m) => m.RecruitmentModule
          ),
      },
      {
        path: '',
        loadChildren: () =>
          import('./modules/fresher-training/fresher-training.module').then(
            (m) => m.FresherTrainingModule
          ),
      },
      {
        path: '',
        loadChildren: () =>
          import('./modules/training/training.module').then(
            (m) => m.TrainingModule
          ),
      },
      {
        path: '',
        loadChildren: () =>
          import('./modules/assets/assets.module').then((m) => m.AssetsModule),
      },
      {
        path: '',
        loadChildren: () =>
          import('./modules/attendance/attendance.module').then(
            (m) => m.AttendanceModule
          ),
      },
      {
        path: '',
        loadChildren: () =>
          import('./modules/leave/leave.module').then((m) => m.LeaveModule),
      },
      {
        path: '',
        loadChildren: () =>
          import('./modules/tickets/tickets.module').then((m) => m.TicketsModule),
      },
      {
        path: '',
        loadChildren: () =>
          import('./modules/dsr/dsr.module').then((m) => m.DsrModule),
      },
      {
        path: ABS_LAYOUT_PROJECT.path,
        loadChildren: () =>
          import('./modules/project/project.module').then((m) => m.ProjectModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
