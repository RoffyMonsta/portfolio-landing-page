import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { PortfolioLandingPageModule } from './app/portfolio-landing-page.component.module';

/// @ts-ignore
require('src/styles.scss?ngGlobalStyle');

platformBrowserDynamic().bootstrapModule(PortfolioLandingPageModule)
  .catch(err => console.error(err));
