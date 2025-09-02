import { Component, OnInit } from '@angular/core';
import { assetUrl } from 'src/single-spa/asset-url';

export enum eProjectTechnology {
  ANGULAR = 'Angular',
  REACT = 'React',
  IONIC = 'Ionic',
  FLUTTER = 'Flutter',
  NODEJS = 'NodeJS',
};

export interface IMyProject {
  name: string,
  demoPath: string,
  codeURL: string,
  technology: eProjectTechnology,
}
@Component({
  selector: 'app-my-projects-demo',
  templateUrl: './my-projects-demo.component.html',
  styleUrls: ['./my-projects-demo.component.scss']
})
export class MyProjectsDemoComponent implements OnInit {

  iconPath: {[key: string]: string} = {
    [eProjectTechnology.ANGULAR]: assetUrl('/technologies/angular.svg'),
    [eProjectTechnology.REACT]: assetUrl('/technologies/react.svg'),
    [eProjectTechnology.IONIC]: assetUrl('/technologies/ionic.svg'),
    [eProjectTechnology.FLUTTER]: assetUrl('/technologies/flutter.svg'),
    [eProjectTechnology.NODEJS]: assetUrl('/technologies/nodejs.svg'),
  };

  myprojects: IMyProject[] = [
    {
      name: 'This landing page',
      demoPath: '/',
      codeURL: 'https://github.com/RoffyMonsta/portfolio-landing-page',
      technology: eProjectTechnology.ANGULAR
    },
    {
      name: 'UA Army Recruitment Website',
      demoPath: 'https://www.fort92tro.com.ua/',
      codeURL: 'https://github.com/RoffyMonsta/fort92tro',
      technology: eProjectTechnology.REACT
    },
    {
      name: 'JoJo Stand Battle Game',
      demoPath: 'https://roffymonsta.github.io/jojo-mini-game',
      codeURL: 'https://github.com/RoffyMonsta/jojo-mini-game',
      technology: eProjectTechnology.REACT
    },
    {
      name: `Jojo's Bizzare Adventure Wiki-API`,
      demoPath: 'https://jojo-api.onrender.com/api/v1/characters',
      codeURL: 'https://github.com/RoffyMonsta/portfolio-jojo-backend-api',
      technology: eProjectTechnology.NODEJS
    },
  ];

  groupedProjects: { [key: string]: IMyProject[] } = {};
  groupedProjectsKeys: string[] = [];

  ngOnInit(): void {
      this.getGroupedProjects();
  }
  getGroupedProjects() {
    this.myprojects.forEach(project => {
      const key = project.technology;
      if (!this.groupedProjects[key]) {
        this.groupedProjects[key] = [];
      }
      this.groupedProjects[key].push(project);
    });
    this.groupedProjectsKeys = Object.keys(this.groupedProjects);
  }

}
