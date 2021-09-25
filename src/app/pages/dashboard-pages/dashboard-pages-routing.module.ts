import { NavComponent } from '../../common/components/nav/nav.component';
import { DashComponent } from './dash/dash.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: DashComponent
  },
  {
    path: 'nav',
    component: NavComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardPagesRoutingModule { }
