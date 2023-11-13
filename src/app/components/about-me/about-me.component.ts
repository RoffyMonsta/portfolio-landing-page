import { Component } from '@angular/core';
import { assetUrl } from 'src/single-spa/asset-url';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent {

  ukrainianFlagAsset = assetUrl('/ukrainian-flag.svg');
  britainFlagAsset = assetUrl('./united-kingdom.svg');
  germanFlagAsset = assetUrl('/germany-flag.svg');
  polishFlagAsset = assetUrl('/poland-flag.svg');
}
