import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ABS_LAYOUT_TICKETS } from 'src/app/constants/absolute-routes';
import { TicketsComponent } from './tickets.component';

const routes: Routes = [
  {path:'',component:TicketsComponent,children:[
    {
      path: ABS_LAYOUT_TICKETS.path,
      loadChildren: () =>
        import('./ticket/ticket.module').then((m) => m.TicketModule),
    },
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicketsRoutingModule { }
