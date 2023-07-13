import { BannerComponent } from '../app/components/banner/banner.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'about-me', component: AboutMeComponent},
  { path: 'banner', component: BannerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
