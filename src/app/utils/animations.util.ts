import { trigger, state, style, transition, animate, query, stagger } from '@angular/animations';

export const fadeInUp = trigger('fadeInUp', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(30px)' }),
    animate('0.6s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
  ])
]);

export const fadeIn = trigger('fadeIn', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('0.5s ease-in', style({ opacity: 1 }))
  ])
]);

export const slideInLeft = trigger('slideInLeft', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateX(-50px)' }),
    animate('0.5s ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
  ])
]);

export const slideInRight = trigger('slideInRight', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateX(50px)' }),
    animate('0.5s ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
  ])
]);

export const staggerAnimation = trigger('stagger', [
  transition('* => *', [
    query(':enter', [
      style({ opacity: 0, transform: 'translateY(20px)' }),
      stagger(100, [
        animate('0.4s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ], { optional: true })
  ])
]);

export const scaleIn = trigger('scaleIn', [
  transition(':enter', [
    style({ opacity: 0, transform: 'scale(0.8)' }),
    animate('0.4s ease-out', style({ opacity: 1, transform: 'scale(1)' }))
  ])
]);

export const cardHover = trigger('cardHover', [
  state('normal', style({ transform: 'translateY(0)' })),
  state('hovered', style({ transform: 'translateY(-8px)' })),
  transition('normal <=> hovered', animate('0.3s ease-out'))
]);

export class AnimationUtils {
  static observeElements(selector: string, animationClass: string): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(animationClass);
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    document.querySelectorAll(selector).forEach(el => {
      observer.observe(el);
    });
  }

  static initScrollAnimations(): void {
    this.observeElements('.tech-skill', 'animate-fade-in-up');
    this.observeElements('.work-card', 'animate-slide-in-left');
    this.observeElements('.about-me__section', 'animate-fade-in');
    this.observeElements('.my-projects mat-expansion-panel', 'animate-scale-in');
  }
}