import { Injectable } from '@angular/core';
import { BehaviorSubject, fromEvent, Observable } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';

export interface NavigationItem {
  id: string;
  title: string;
  active: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private navigationItems: NavigationItem[] = [
    { id: 'welcome', title: 'Home', active: true },
    { id: 'about_me', title: 'About', active: false },
    { id: 'work_experience', title: 'Experience', active: false },
    { id: 'technical_skills', title: 'Skills', active: false },
    { id: 'projects_demo', title: 'Projects', active: false },
    { id: 'contact_me', title: 'Contact', active: false }
  ];

  private activeSection$ = new BehaviorSubject<string>('welcome');
  private navigationItems$ = new BehaviorSubject<NavigationItem[]>(this.navigationItems);

  constructor() {
    this.initScrollListener();
  }

  getNavigationItems(): Observable<NavigationItem[]> {
    return this.navigationItems$.asObservable();
  }

  getActiveSection(): Observable<string> {
    return this.activeSection$.asObservable();
  }

  setActiveSection(sectionId: string): void {
    this.navigationItems = this.navigationItems.map(item => ({
      ...item,
      active: item.id === sectionId
    }));
    this.navigationItems$.next(this.navigationItems);
    this.activeSection$.next(sectionId);
  }

  scrollToSection(sectionId: string): void {
    const element = document.querySelector(`[appScrollSection="${sectionId}"]`);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      this.setActiveSection(sectionId);
    }
  }

  private initScrollListener(): void {
    fromEvent(window, 'scroll')
      .pipe(
        debounceTime(100),
        map(() => this.getCurrentSection())
      )
      .subscribe(currentSection => {
        if (currentSection && currentSection !== this.activeSection$.value) {
          this.setActiveSection(currentSection);
        }
      });
  }

  private getCurrentSection(): string | null {
    const sections = this.navigationItems.map(item => item.id);
    const scrollPosition = window.scrollY + 200;

    for (let i = sections.length - 1; i >= 0; i--) {
      const element = document.querySelector(`[appScrollSection="${sections[i]}"]`);
      if (element) {
        const rect = element.getBoundingClientRect();
        const elementTop = rect.top + window.pageYOffset;
        
        if (scrollPosition >= elementTop) {
          return sections[i];
        }
      }
    }
    
    return sections[0];
  }
}