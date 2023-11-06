import { TestBed } from '@angular/core/testing';
import { PortfolioLandingPageComponent } from './portfolio-landing-page.component';
import { TypewriterWelcomeComponent } from './components/welcome-page/typewriter-welcome/typewriter-welcome.component';
import { ExperienceCalculatorComponent } from './components/welcome-page/experience-calculator/experience-calculator.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { TechnicalSkillsComponent } from './components/technical-skills/technical-skills.component';
import { WorkExperienceComponent } from './components/work-experience/work-experience.component';
import { ContactMeComponent } from './components/contact-me/contact-me.component';
import { MyProjectsDemoComponent } from './components/my-projects-demo/my-projects-demo.component';
import { NgxScrollTopModule } from 'ngx-scrolltop';
import { NavigationComponent } from './components/welcome-page/navigation/navigation.component';

describe('PortfolioLandingPageComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [PortfolioLandingPageComponent,
      TypewriterWelcomeComponent,
      ExperienceCalculatorComponent,
      WelcomePageComponent,
      AboutMeComponent,
      TechnicalSkillsComponent,
      WorkExperienceComponent,
      ContactMeComponent,
      MyProjectsDemoComponent,
      NavigationComponent
    ],
    imports: [
      NgxScrollTopModule
    ]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(PortfolioLandingPageComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
