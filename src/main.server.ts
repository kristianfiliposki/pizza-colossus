import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app//body/app.component';
import { config } from './app//body/app.config.server';

const bootstrap = () => bootstrapApplication(AppComponent, config);

export default bootstrap;
