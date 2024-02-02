import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomePageComponent } from './welcome-page.component';
import { TypewriterWelcomeComponent } from './typewriter-welcome/typewriter-welcome.component';
import { ExperienceCalculatorComponent } from './experience-calculator/experience-calculator.component';
import { NavigationComponent } from '../navigation/navigation.component';
import { ScrollAnchorDirective } from '../navigation/scroll-manager/scroll-anchor.directive';
import { ScrollManagerDirective } from '../navigation/scroll-manager/scroll-manager.directive';

describe('WelcomePageComponent', () => {
  let component: WelcomePageComponent;
  let fixture: ComponentFixture<WelcomePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WelcomePageComponent, TypewriterWelcomeComponent, ExperienceCalculatorComponent, NavigationComponent, ScrollAnchorDirective],
      providers: [ScrollManagerDirective]
    });
    fixture = TestBed.createComponent(WelcomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
