import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpericenceComponent } from './expericence.component';

const routes: Routes = [{ path: '', component: ExpericenceComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpericenceRoutingModule { }
