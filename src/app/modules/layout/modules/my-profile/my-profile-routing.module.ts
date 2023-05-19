import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ABS_BASIC_INFO, ABS_LAYOUT_MYPROFILE } from 'src/app/constants/absolute-routes';
import {
  APPRAISAL,
  BASIC,
  CHANGE_PASSWORD,
  DEPARTMENTCHANGE,
  PROFILE_PIC,
  QUALIFICATION,
  SHIFT,
} from 'src/app/constants/routes';
import { AppraisalComponent } from './appraisal/appraisal.component';
import { BasicInformationComponent } from './basic-information/basic-information.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { DepartmentChangeComponent } from './department-change/department-change.component';
import { MyProfileComponent } from './my-profile.component';
import { ProfilePictureComponent } from './profile-picture/profile-picture.component';
import { QualificationComponent } from './qualification/qualification.component';
import { ShiftComponent } from './shift/shift.component';

const routes: Routes = [
  {
    path: '',
    component: MyProfileComponent,
    children: [
      { path: '', redirectTo: ABS_BASIC_INFO.path},

      { path: BASIC, component: BasicInformationComponent, },
      { path: PROFILE_PIC, component: ProfilePictureComponent },
      { path: QUALIFICATION, component: QualificationComponent },
      { path: SHIFT, component: ShiftComponent },
      { path: CHANGE_PASSWORD, component: ChangePasswordComponent },
      { path: APPRAISAL, component: AppraisalComponent },
      { path: DEPARTMENTCHANGE, component: DepartmentChangeComponent },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyProfileRoutingModule {}
