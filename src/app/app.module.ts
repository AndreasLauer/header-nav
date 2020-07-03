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
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { MessagesComponent } from './messages/messages.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { HeaderComponent } from './header/header.component';
import { FxLayoutDemoComponent } from './fx-layout-demo/fx-layout-demo.component';
import { ImagesComponent } from './images/images.component';
import { MusicComponent } from './music/music.component';
import { ToolsComponent } from './tools/tools.component';
import { MaterialComponent } from './material/material.component';

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
    ToolsComponent,
    MaterialComponent
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
