import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { FxLayoutDemoComponent } from './fx-layout-demo/fx-layout-demo.component';
import { ImagesComponent } from './images/images.component';
import { MusicComponent } from './music/music.component';
import { ToolsComponent } from './tools/tools.component';
import { MaterialComponent } from './material/material.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'fx-layout-demo', component: FxLayoutDemoComponent },
  { path: 'images', component: ImagesComponent },
  { path: 'music', component: MusicComponent },
  { path: 'tools', component: ToolsComponent },
  { path: 'material', component: MaterialComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}