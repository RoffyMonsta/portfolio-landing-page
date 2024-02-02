import { Component, Input } from '@angular/core';

export interface IWorkCard {
  date: string;
  companyName: string;
  companyLink: string;
  positions: {
    positionDate: string;
    positionName: string;
  }[];
  projects: {
    projectDate: string;
    projectLink?: string;
    projectName: string;
    projectDescription: string;
  }[];
  responsibilites: string[];
}
@Component({
  selector: 'app-work-card',
  templateUrl: './work-card.component.html',
  styleUrls: ['./work-card.component.scss']
})
export class WorkCardComponent {
  @Input() cardInfo!: IWorkCard;
}
