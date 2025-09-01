export class PerformanceUtils {
  /**
   * Debounce function to limit the rate of function execution
   */
  static debounce<T extends (...args: any[]) => any>(
    func: T,
    wait: number,
    immediate?: boolean
  ): (...args: Parameters<T>) => void {
    let timeout: number | null = null;
    
    return function executedFunction(...args: Parameters<T>) {
      const later = () => {
        timeout = null;
        if (!immediate) func(...args);
      };
      
      const callNow = immediate && !timeout;
      
      if (timeout) clearTimeout(timeout);
      timeout = setTimeout(later, wait) as any;
      
      if (callNow) func(...args);
    };
  }

  /**
   * Throttle function to limit function execution to once per specified time period
   */
  static throttle<T extends (...args: any[]) => any>(
    func: T,
    limit: number
  ): (...args: Parameters<T>) => void {
    let inThrottle: boolean;
    
    return (...args: Parameters<T>) => {
      if (!inThrottle) {
        func(...args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  }

  /**
   * Lazy load images when they come into viewport
   */
  static lazyLoadImages(selector: string = 'img[data-src]'): void {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          const src = img.getAttribute('data-src');
          
          if (src) {
            img.src = src;
            img.removeAttribute('data-src');
            img.classList.add('loaded');
          }
          
          observer.unobserve(img);
        }
      });
    });

    document.querySelectorAll(selector).forEach(img => {
      imageObserver.observe(img);
    });
  }

  /**
   * Preload critical resources
   */
  static preloadResources(resources: string[]): void {
    resources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      
      if (resource.endsWith('.css')) {
        link.as = 'style';
      } else if (resource.match(/\.(jpg|jpeg|png|webp|svg)$/)) {
        link.as = 'image';
      } else if (resource.match(/\.(woff|woff2|ttf|otf)$/)) {
        link.as = 'font';
        link.crossOrigin = 'anonymous';
      }
      
      document.head.appendChild(link);
    });
  }

  /**
   * Measure and log performance metrics
   */
  static measurePerformance(): void {
    if ('performance' in window) {
      window.addEventListener('load', () => {
        setTimeout(() => {
          const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
          
          const metrics = {
            'DNS Lookup': perfData.domainLookupEnd - perfData.domainLookupStart,
            'TCP Connection': perfData.connectEnd - perfData.connectStart,
            'Request': perfData.responseStart - perfData.requestStart,
            'Response': perfData.responseEnd - perfData.responseStart,
            'DOM Processing': perfData.domContentLoadedEventStart - perfData.responseEnd,
            'Load Complete': perfData.loadEventEnd - perfData.loadEventStart,
            'Total Load Time': perfData.loadEventEnd - perfData.fetchStart
          };

          console.group('🚀 Performance Metrics');
          Object.entries(metrics).forEach(([key, value]) => {
            console.log(`${key}: ${Math.round(value)}ms`);
          });
          console.groupEnd();
        }, 0);
      });
    }
  }

  /**
   * Check if user prefers reduced motion
   */
  static prefersReducedMotion(): boolean {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  /**
   * Get device performance tier based on hardware capabilities
   */
  static getDevicePerformanceTier(): 'low' | 'medium' | 'high' {
    // Check for hardware concurrency (CPU cores)
    const cores = navigator.hardwareConcurrency || 1;
    
    // Check for device memory (if available)
    const memory = (navigator as any).deviceMemory || 1;
    
    // Check for connection speed
    const connection = (navigator as any).connection;
    const effectiveType = connection?.effectiveType || '4g';
    
    if (cores >= 8 && memory >= 4 && effectiveType === '4g') {
      return 'high';
    } else if (cores >= 4 && memory >= 2) {
      return 'medium';
    } else {
      return 'low';
    }
  }

  /**
   * Optimize animations based on device performance
   */
  static optimizeAnimations(): void {
    const performanceTier = this.getDevicePerformanceTier();
    const prefersReduced = this.prefersReducedMotion();
    
    if (prefersReduced || performanceTier === 'low') {
      document.documentElement.style.setProperty('--transition-fast', '0s');
      document.documentElement.style.setProperty('--transition-normal', '0s');
      document.documentElement.style.setProperty('--transition-slow', '0s');
    } else if (performanceTier === 'medium') {
      document.documentElement.style.setProperty('--transition-fast', '0.1s');
      document.documentElement.style.setProperty('--transition-normal', '0.2s');
      document.documentElement.style.setProperty('--transition-slow', '0.3s');
    }
  }
}