import { BootstrapContext, bootstrapApplication } from '@angular/platform-browser';
import { LandingPageComponent } from './app/app';
import { config } from './app/app.config.server';

const bootstrap = (context: BootstrapContext) =>
    bootstrapApplication(LandingPageComponent, config, context);

export default bootstrap;
