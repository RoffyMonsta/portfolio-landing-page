import { Component } from '@angular/core';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss']
})
export class WelcomePageComponent {

  constructor(private navigationService: NavigationService) {}

  scrollToSection(sectionId: string): void {
    this.navigationService.scrollToSection(sectionId);
  }
}
