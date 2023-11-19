import { Component } from '@angular/core';
import { assetUrl } from 'src/single-spa/asset-url';

export interface ILink {
  title: string,
  link: string
}
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

  emailIconPath = assetUrl('/icons/email.svg');
  linkedinIconPath = assetUrl('/icons/linkedin.svg');
  githubIconPath = assetUrl('/icons/github.svg');

  links: ILink[] = [
    {
      title: 'Welcome',
      link: 'welcome'
    },
    {
      title: 'About me',
      link: 'about_me'
    },
    {
      title: 'Work experience',
      link: 'work_experience'
    },
    {
      title: 'Technical skills',
      link: 'technical_skills'
    },
    {
      title: 'My projects and demo',
      link: 'projects_demo'
    },
    {
      title: 'Contact me',
      link: 'contact'
    }
  ];
}
