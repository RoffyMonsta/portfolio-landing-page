import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent {
  ukrainianFlagAsset = 'assets/flags/ukrainian-flag.svg';
  britainFlagAsset = 'assets/flags/united-kingdom.svg';
  germanFlagAsset = 'assets/flags/germany-flag.svg';
  polishFlagAsset = 'assets/flags/poland-flag.svg';
}
