import { Component } from '@angular/core';
import { assetUrl } from 'src/single-spa/asset-url';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent {

  ukrainianFlagAsset = assetUrl('./../../../assets/ukrainian-flag.svg');
  britainFlagAsset = assetUrl('./../../../assets/united-kingdom.svg');
  germanFlagAsset = assetUrl('./../../../assets/germany-flag.svg');
  polishFlagAsset = assetUrl('./../../../assets/poland-flag.svg');
}
