import { Component } from '@angular/core';
import { assetUrl } from 'src/single-spa/asset-url';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent {
  ukrainianFlagAsset = assetUrl('/flags/ukrainian-flag.svg');
  britainFlagAsset = assetUrl('/flags/united-kingdom.svg');
  germanFlagAsset = assetUrl('/flags/germany-flag.svg');
  polishFlagAsset = assetUrl('/flags/poland-flag.svg');
}
