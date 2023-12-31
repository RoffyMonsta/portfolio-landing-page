import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PortfolioLandingPageComponent } from './portfolio-landing-page.component';
import { TypewriterWelcomeComponent } from './components/welcome-page/typewriter-welcome/typewriter-welcome.component';
import { ExperienceCalculatorComponent } from './components/welcome-page/experience-calculator/experience-calculator.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { WorkExperienceComponent } from './components/work-experience/work-experience.component';
import { TechnicalSkillsComponent } from './components/technical-skills/technical-skills.component';
import { MyProjectsDemoComponent } from './components/my-projects-demo/my-projects-demo.component';
import { ContactMeComponent } from './components/contact-me/contact-me.component';
import { ScrollManagerModule } from './components/navigation/scroll-manager/scroll-manager.module';
import { NgxScrollTopModule } from 'ngx-scrolltop';
import { WorkCardComponent } from './components/work-experience/work-card/work-card.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDividerModule} from '@angular/material/divider';
import { FooterComponent } from './components/footer/footer.component';
@NgModule({
  declarations: [
    PortfolioLandingPageComponent,
    TypewriterWelcomeComponent,
    ExperienceCalculatorComponent,
    WelcomePageComponent,
    NavigationComponent,
    AboutMeComponent,
    WorkExperienceComponent,
    TechnicalSkillsComponent,
    MyProjectsDemoComponent,
    ContactMeComponent,
    WorkCardComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ScrollManagerModule,
    NgxScrollTopModule,
    MatExpansionModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [PortfolioLandingPageComponent]
})
export class PortfolioLandingPageModule { }
