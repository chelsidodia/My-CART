import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { TaskPageComponent } from './task-page/task-page.component';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(
    [
      { path: '', component: HomeComponent },
      { path: 'home', component: HomeComponent },
      { path: 'news', component: NewsComponent },
      { path: 'task', component: TaskPageComponent },
    ],
    withComponentInputBinding()
  ),]
};
