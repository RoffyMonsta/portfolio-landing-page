import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ThemeManager } from './utils/theme.util';
import { AnimationUtils } from './utils/animations.util';
import { PerformanceUtils } from './utils/performance.util';
import { assetUrl } from 'src/single-spa/asset-url';

@Component({
  selector: 'roffymonsta-portfolio-landing-page',
  templateUrl: './portfolio-landing-page.component.html',
  styleUrls: ['./portfolio-landing-page.component.scss'],
})
export class PortfolioLandingPageComponent implements OnInit, AfterViewInit {
  ngOnInit(): void {
    // Initialize theme
    ThemeManager.initializeTheme();

    // Optimize performance based on device capabilities
    PerformanceUtils.optimizeAnimations();

    // Measure performance in development
    if (location.hostname === 'localhost') {
      PerformanceUtils.measurePerformance();
    }


  }

  ngAfterViewInit(): void {
    // Initialize scroll animations after view is ready
    setTimeout(() => {
      AnimationUtils.initScrollAnimations();
      PerformanceUtils.lazyLoadImages();
    }, 100);
  }
}
