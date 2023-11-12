import { Component } from '@angular/core';

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
