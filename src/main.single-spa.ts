
import { enableProdMode, NgZone } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { singleSpaAngular } from 'single-spa-angular';

import { PortfolioLandingPageModule } from './app/portfolio-landing-page.component.module';
import { singleSpaPropsSubject } from './single-spa/single-spa-props';

/// @ts-ignore
require('src/styles.scss?ngGlobalStyle');

const lifecycles = singleSpaAngular({
  bootstrapFunction: singleSpaProps => {
    singleSpaPropsSubject.next(singleSpaProps);
    return platformBrowserDynamic().bootstrapModule(PortfolioLandingPageModule);
  },
  template: '<roffymonsta-portfolio-landing-page />',
  NgZone,
});

export const bootstrap = lifecycles.bootstrap;
export const mount = lifecycles.mount;
export const unmount = lifecycles.unmount;
