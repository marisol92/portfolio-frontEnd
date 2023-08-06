import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BannerComponent } from '../app/components/banner/banner.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { LoginComponent } from './components/login/login.component';
import { WorksComponent } from './components/works/works.component';
import { NewExperienceComponent } from './components/experience/new-experience.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EditExperienceComponent } from './components/experience/edit-experience.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'about-me', component: AboutMeComponent},
  { path: 'banner', component: BannerComponent},
  { path: 'login', component: LoginComponent},
  { path: 'works', component: WorksComponent},
  { path: 'new-experience', component: NewExperienceComponent},
  { path: 'experience', component: ExperienceComponent},
  { path: 'edit-experience/:id', component: EditExperienceComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
