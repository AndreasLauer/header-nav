import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { OverviewComponent as TaskOverviewComponent } from './pages/tasks/overview/overview.component';
import { WorkflowComponent } from './pages/tasks/workflow/workflow.component';
import { BacklogComponent } from './pages/tasks/backlog/backlog.component';
import { ArchiveComponent } from './pages/tasks/archive/archive.component';
import { FinalizeComponent } from './pages/tasks/finalize/finalize.component';
import { SpecsComponent } from './pages/tasks/specs/specs.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { FxLayoutDemoComponent } from './pages/angular/fxflex/fx-layout-demo.component';
import { ImagesComponent } from './pages/media/images/images.component';
import { MusicComponent } from './pages/media/music/music.component';
import { OverviewComponent as ToolsOverviewComponent } from './pages/tools/overview/overview.component';
import { OverviewComponent as AngularOverviewComponent } from './pages/angular/overview/overview.component';
import { MaterialComponent } from './pages/angular/material/material.component';
import { PlaygroundComponent } from './pages/angular/playground/playground.component';
import { OverviewComponent as MediaOverviewComponent } from './pages/media/overview/overview.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'tasks/overview', component: TaskOverviewComponent },
  { path: 'tasks/workflow', component: WorkflowComponent },
  { path: 'tasks/backlog', component: BacklogComponent },
  { path: 'tasks/archive', component: ArchiveComponent },
  { path: 'tasks/finalize', component: FinalizeComponent },
  { path: 'tasks/specs', component: SpecsComponent },
  { path: 'angular/overview', component: AngularOverviewComponent },
  { path: 'angular/material', component: MaterialComponent },
  { path: 'angular/fxflex', component: FxLayoutDemoComponent },
  { path: 'angular/playground', component: PlaygroundComponent },
  { path: 'media/overview', component: MediaOverviewComponent },
  { path: 'media/images', component: ImagesComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'media/music', component: MusicComponent },
  { path: 'tools/overview', component: ToolsOverviewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}