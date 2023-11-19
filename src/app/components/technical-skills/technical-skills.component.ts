import { Component, OnInit } from '@angular/core';

export enum eTechnicalSkillType  {
  FRONTEND = 'Frontend',
  BACKEND = 'Backend',
  TESTING = 'Testing'
}

export enum eTechnicalSkillSubtype {
  WEB = 'Web',
  MOBILE = 'Mobile',
  SERVER = 'Server',
  DATABASE = 'Database',
  AWS = 'AWS',
  TESTING_TOOLS = 'Testing Tools'

}
export interface ITechnicalSkill {
  type: eTechnicalSkillType,
  subtype: string,
  name: string,
}

@Component({
  selector: 'app-technical-skills',
  templateUrl: './technical-skills.component.html',
  styleUrls: ['./technical-skills.component.scss']
})
export class TechnicalSkillsComponent implements OnInit {
  eTechnicalSkillType = eTechnicalSkillType;
  eTechnicalSkillSubtype = eTechnicalSkillSubtype;

  technicalSkills: ITechnicalSkill[] = [
    {
      type: eTechnicalSkillType.FRONTEND,
      subtype: eTechnicalSkillSubtype.WEB,
      name: 'Angular',
    },
    {
      type: eTechnicalSkillType.FRONTEND,
      subtype: eTechnicalSkillSubtype.WEB,
      name: 'React',
    },
    {
      type: eTechnicalSkillType.FRONTEND,
      subtype: eTechnicalSkillSubtype.WEB,
      name: 'HTML/SCSS',
    },
    {
      type: eTechnicalSkillType.FRONTEND,
      subtype: eTechnicalSkillSubtype.WEB,
      name: 'NgXs',
    },
    {
      type: eTechnicalSkillType.FRONTEND,
      subtype: eTechnicalSkillSubtype.WEB,
      name: 'RxJS',
    },
    {
      type: eTechnicalSkillType.FRONTEND,
      subtype: eTechnicalSkillSubtype.WEB,
      name: 'React',
    },
    {
      type: eTechnicalSkillType.FRONTEND,
      subtype: eTechnicalSkillSubtype.WEB,
      name: 'MFE (Single-SPA, Module Federation)',
    },
    {
      type: eTechnicalSkillType.FRONTEND,
      subtype: eTechnicalSkillSubtype.WEB,
      name: 'Webpack',
    },
    {
      type: eTechnicalSkillType.FRONTEND,
      subtype: eTechnicalSkillSubtype.MOBILE,
      name: 'Ionic',
    },
    {
      type: eTechnicalSkillType.FRONTEND,
      subtype: eTechnicalSkillSubtype.MOBILE,
      name: 'Flutter',
    },
    {
      type: eTechnicalSkillType.FRONTEND,
      subtype: eTechnicalSkillSubtype.MOBILE,
      name: 'Cordova',
    },
    {
      type: eTechnicalSkillType.FRONTEND,
      subtype: eTechnicalSkillSubtype.MOBILE,
      name: 'Protractor',
    },
    {
      type: eTechnicalSkillType.BACKEND,
      subtype: eTechnicalSkillSubtype.SERVER,
      name: 'NodeJS',
    },
    {
      type: eTechnicalSkillType.BACKEND,
      subtype: eTechnicalSkillSubtype.SERVER,
      name: 'Express',
    },
    {
      type: eTechnicalSkillType.BACKEND,
      subtype: eTechnicalSkillSubtype.SERVER,
      name: 'RestAPI',
    },
    {
      type: eTechnicalSkillType.BACKEND,
      subtype: eTechnicalSkillSubtype.SERVER,
      name: 'GraphQL',
    },
    {
      type: eTechnicalSkillType.BACKEND,
      subtype: eTechnicalSkillSubtype.SERVER,
      name: 'JWT',
    },
    {
      type: eTechnicalSkillType.BACKEND,
      subtype: eTechnicalSkillSubtype.SERVER,
      name: 'Auth0',
    },
    {
      type: eTechnicalSkillType.BACKEND,
      subtype: eTechnicalSkillSubtype.DATABASE,
      name: 'DynamoDB',
    },
    {
      type: eTechnicalSkillType.BACKEND,
      subtype: eTechnicalSkillSubtype.DATABASE,
      name: 'PostgreSQL',
    },
    {
      type: eTechnicalSkillType.BACKEND,
      subtype: eTechnicalSkillSubtype.DATABASE,
      name: 'NeptuneDB',
    },
    {
      type: eTechnicalSkillType.BACKEND,
      subtype: eTechnicalSkillSubtype.AWS,
      name: 'Lambda/Serverless',
    },
    {
      type: eTechnicalSkillType.BACKEND,
      subtype: eTechnicalSkillSubtype.AWS,
      name: 'S3',
    },
    {
      type: eTechnicalSkillType.BACKEND,
      subtype: eTechnicalSkillSubtype.AWS,
      name: 'CloudFormation',
    },
    {
      type: eTechnicalSkillType.BACKEND,
      subtype: eTechnicalSkillSubtype.AWS,
      name: 'CloudWatch',
    },
    {
      type: eTechnicalSkillType.BACKEND,
      subtype: eTechnicalSkillSubtype.AWS,
      name: 'EC2',
    },
    {
      type: eTechnicalSkillType.BACKEND,
      subtype: eTechnicalSkillSubtype.AWS,
      name: 'Route53',
    },
    {
      type: eTechnicalSkillType.BACKEND,
      subtype: eTechnicalSkillSubtype.AWS,
      name: 'Kinesis',
    },
    {
      type: eTechnicalSkillType.TESTING,
      subtype: eTechnicalSkillSubtype.TESTING_TOOLS,
      name: 'Karma/TestBed',
    },
    {
      type: eTechnicalSkillType.TESTING,
      subtype: eTechnicalSkillSubtype.TESTING_TOOLS,
      name: 'Jest',
    },
    {
      type: eTechnicalSkillType.TESTING,
      subtype: eTechnicalSkillSubtype.TESTING_TOOLS,
      name: 'Cypress',
    },
    {
      type: eTechnicalSkillType.TESTING,
      subtype: eTechnicalSkillSubtype.TESTING_TOOLS,
      name: 'Sinon/Chai',
    },
    {
      type: eTechnicalSkillType.TESTING,
      subtype: eTechnicalSkillSubtype.TESTING_TOOLS,
      name: 'Postman',
    },
    {
      type: eTechnicalSkillType.TESTING,
      subtype: eTechnicalSkillSubtype.TESTING_TOOLS,
      name: 'Insomnia',
    },
  ];

  ngOnInit(): void {
    this.groupSkillsByTypeAndSubtype();
  }

  groupedSkills: { [key: string]: { subtype: string, skills: string  }[] } = {};
  groupedSkillsKeys: string[] = [];
  groupSkillsByTypeAndSubtype() {
    this.technicalSkills.forEach(skill => {
      const key = skill.type;
      if (!this.groupedSkills[key]) {
        this.groupedSkills[key] = [];
      }
      const subtypeIndex = this.groupedSkills[key].findIndex(item => item.subtype === skill.subtype);
      if (subtypeIndex === -1) {
        this.groupedSkills[key].push({ subtype: skill.subtype, skills: skill.name });
      } else {
        this.groupedSkills[key][subtypeIndex].skills += `, ${skill.name}`;
      }
    });
    this.groupedSkillsKeys = Object.keys(this.groupedSkills);
  }
}
