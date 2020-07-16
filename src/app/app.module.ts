import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { AgGridModule } from 'ag-grid-angular';
import { AppRoutingModule } from './app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { MessagesComponent } from './messages/messages.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { HeaderComponent } from './frame/header/header.component';
import { FxLayoutDemoComponent } from './pages/angular/fxflex/fx-layout-demo.component';
import { ImagesComponent } from './pages/media/images/images.component';
import { MusicComponent } from './pages/media/music/music.component';
import { OverviewComponent as ToolsOverviewComponent } from './pages/tools/overview/overview.component';
import { MaterialComponent } from './pages/angular/material/material.component';
import { ContentBoxComponent } from './components/content-box/content-box.component';
import { InfoContainerComponent } from './components/info-container/info-container.component';
import { FormContainerComponent } from './components/form-container/form-container.component';
import { TaskListContainerComponent } from './components/task-list-container/task-list-container.component';
import { TaskListItemComponent } from './components/task-list-item/task-list-item.component';
import { SidenavComponent } from './frame/sidenav/sidenav.component';
import { OverviewComponent as TaskOverviewComponent } from './pages/tasks/overview/overview.component';
import { WorkflowComponent } from './pages/tasks/workflow/workflow.component';
import { BacklogComponent } from './pages/tasks/backlog/backlog.component';
import { ArchiveComponent } from './pages/tasks/archive/archive.component';
import { FinalizeComponent } from './pages/tasks/finalize/finalize.component';
import { TaskDetailsComponent } from './components/task-details/task-details.component';
import { TaskProgressColumnComponent } from './components/task-progress-column/task-progress-column.component';
import { TaskProgressEpicComponent } from './components/task-progress-epic/task-progress-epic.component';
import { SpecsComponent } from './pages/tasks/specs/specs.component';
import { OverviewComponent as AngularOverviewComponent } from './pages/angular/overview/overview.component';
import { PlaygroundComponent } from './pages/angular/playground/playground.component';
import { OverviewComponent as MediaOverviewComponent } from './pages/media/overview/overview.component';
import { OverviewComponent } from './pages/tools/overview/overview.component';

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    HeroesComponent,
    HeroDetailComponent,
    DashboardComponent,
    HeroSearchComponent,
    HeaderComponent,
    FxLayoutDemoComponent,
    ImagesComponent,
    MusicComponent,
    ToolsOverviewComponent,
    MaterialComponent,
    ContentBoxComponent,
    InfoContainerComponent,
    FormContainerComponent,
    TaskListContainerComponent,
    TaskListItemComponent,
    SidenavComponent,
    TaskOverviewComponent,
    WorkflowComponent,
    BacklogComponent,
    ArchiveComponent,
    FinalizeComponent,
    TaskDetailsComponent,
    TaskProgressColumnComponent,
    TaskProgressEpicComponent,
    SpecsComponent,
    AngularOverviewComponent,
    PlaygroundComponent,
    MediaOverviewComponent,
    OverviewComponent,
    // SafePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    FlexLayoutModule,
    // The withComponents call is necessary for the grid to be able to use Angular components as cells / headers
    AgGridModule.withComponents([]),
    AppRoutingModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
