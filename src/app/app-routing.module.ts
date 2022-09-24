import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { EducationComponent } from './education/education.component';
import { ProjectsComponent } from './projects/projects.component';
import { WorkComponent } from './work/work.component';
import { SkillComponent } from './skill/skill.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full' },
  {path:'home',component:HomeComponent},
  {path:'contact',component:ContactComponent},
  {path:'education',component:EducationComponent},
  {path:'projects',component:ProjectsComponent},
  {path:'work',component:WorkComponent},
  {path:'skill',component:SkillComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent,ContactComponent,EducationComponent,ProjectsComponent,WorkComponent,SkillComponent]
