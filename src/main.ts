import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/body/app.config';
import { AppComponent } from './app/body/app.component';

bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));

