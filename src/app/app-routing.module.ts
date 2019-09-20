import { NgModule } from '@angular/core';
import { ResultComponent } from './result/result.component';
import { ResultsComponent } from './results/results.component';
import { NumberCheckComponent } from './number-check/number-check.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component:ResultsComponent},
  {path: 'result', component:ResultComponent},
  {path: 'check', component: NumberCheckComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
