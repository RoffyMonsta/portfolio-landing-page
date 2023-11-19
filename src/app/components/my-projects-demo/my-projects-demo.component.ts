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
      name: 'Test Test Test Test Test Test Test Test Test Test Test',
      demoPath: '/asd',
      codeURL: 'https://github.com/RoffyMonsta',
      technology: eProjectTechnology.ANGULAR
    },
    {
      name: 'Test2',
      demoPath: '/asd2',
      codeURL: 'https://github.com/RoffyMonsta',
      technology: eProjectTechnology.ANGULAR
    },
    {
      name: 'Test3',
      demoPath: '/asd3',
      codeURL: 'https://github.com/RoffyMonsta',
      technology: eProjectTechnology.REACT
    },
    {
      name: 'Test4',
      demoPath: '/asd4',
      codeURL: 'https://github.com/RoffyMonsta',
      technology: eProjectTechnology.FLUTTER
    },
    {
      name: 'Test5',
      demoPath: '/asd5',
      codeURL: 'https://github.com/RoffyMonsta',
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
