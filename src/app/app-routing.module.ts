import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'about',
    pathMatch: 'full',
  },
  { path: ' ', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },

  { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
 { path: 'experience', loadChildren: () => import('./expericence/expericence.module').then(m => m.ExpericenceModule) },
 { path: 'c', loadChildren: () => import('./education/education.module').then(m => m.EducationModule) },
 { path: 'd', loadChildren: () => import('./skills/skills.module').then(m => m.SkillsModule) },
  { path: 'e', loadChildren: () => import('./interests/interests.module').then(m => m.InterestsModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
