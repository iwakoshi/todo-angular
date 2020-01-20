import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'task', pathMatch: 'full'},
  {
    path: 'task',
    loadChildren: () => import('./pages/task/task.module').then(m => m.TaskModule),
    pathMatch: 'full',
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
