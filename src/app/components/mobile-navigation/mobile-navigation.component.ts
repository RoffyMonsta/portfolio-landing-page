import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavigationService, NavigationItem } from '../../services/navigation.service';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-mobile-navigation',
  templateUrl: './mobile-navigation.component.html',
  styleUrls: ['./mobile-navigation.component.scss']
})
export class MobileNavigationComponent implements OnInit, OnDestroy {
  navigationItems$: Observable<NavigationItem[]>;
  activeSection$: Observable<string>;
  private destroy$ = new Subject<void>();

  constructor(private navigationService: NavigationService) {
    this.navigationItems$ = this.navigationService.getNavigationItems();
    this.activeSection$ = this.navigationService.getActiveSection();
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onNavigationClick(sectionId: string): void {
    this.navigationService.scrollToSection(sectionId);
  }
}