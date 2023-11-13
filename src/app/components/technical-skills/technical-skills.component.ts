import { Component } from '@angular/core';

export enum eTechnicalSkillType  {
  FRONTEND = 'Frontend',
  BACKEND = 'Backend',
  TESTING = 'Testing'
}
export interface ITechnicalSkill {
  type: eTechnicalSkillType,
  name: string,
  imgURL: string
}
@Component({
  selector: 'app-technical-skills',
  templateUrl: './technical-skills.component.html',
  styleUrls: ['./technical-skills.component.scss']
})
export class TechnicalSkillsComponent {

  technicalSkills: ITechnicalSkill[] = [
    {
      type: eTechnicalSkillType.FRONTEND,
      name: 'Angular',
      imgURL: ''
    }
  ]
}
