import { Component } from '@angular/core';
import { IWorkCard } from './work-card/work-card.component';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss']
})
export class WorkExperienceComponent {

  workCards: IWorkCard[] = [
    {
      date: 'DEC 2021 - PRESENT',
      companyName: 'Agiliway',
      companyLink: 'https://agiliway.com/',
      positions: [
        {
          positionDate:  'OCT 2022 - PRESENT',
          positionName: 'Software Engineer'
        },
        {
          positionDate:  'DEC 2021 - OCT 2022',
          positionName: 'Junior Software Engineer'
        }
      ],
      projects: [
        {
          projectDate: 'DEC 2021 - PRESENT',
          projectLink: 'https://babyscripts.com/',
          projectName: 'Babyscripts',
          projectDescription: "Working within an outstaffing framework for a U.S.-based company, I played a pivotal role in the development of an innovative application designed to elevate pregnancy experiences through advanced monitoring and educational features."
        }
      ],
      responsibilites: [
        "Executed web and mobile development tasks using Angular, React Ionic, Flutter and NodeJS to ensure a seamless user experience",
        "Contributed to backend development, leveraging technologies such as AWS (Dynamo, S3, CloudFormation, CloudWatch), Elastic Search, and Webpack",
        "Engaged in core development activities, implementing features that enriched the application's functionality",
        "Demonstrated a commitment to code quality by writing unit tests and participating actively in code reviews",
        "Led Technical Analysis and Design Documents (TADDs), Proof of Concepts (POCs), and investigative tasks to explore and implement innovative solutions",
      ]
    },
    {
      date: 'MAR 2021 - DEC 2021',
      companyName: 'Regulus Team',
      companyLink: 'https://www.regulus.team/en/',
      positions: [
        {
          positionDate:  'MAR 2021 - DEC 2021',
          positionName: 'Junior Software Engineer'
        }
      ],
      projects: [
        {
          projectDate: 'MAR 2021 - DEC 2021',
          projectName: 'Family Shopping',
          projectDescription: "As a Trainee-Junior Frontend Developer specializing in Angular, I undertook key responsibilities and achieved notable milestones during my tenure"
        }
      ],
      responsibilites: [
        "Collaborated with senior developers, contributing to the coding and development of web applications using Angular",
        "Assisted in the creation of a responsive and visually appealing mobile app using Ionic, actively participating in design and implementation phases",
        "Engaged in regular code reviews, absorbing feedback to enhance coding skills and maintain code quality",
        "Supported the integration of UI/UX designs, ensuring seamless collaboration with design and back-end teams",
        "Participated in team meetings, providing valuable insights and learning from experienced professionals",
      ]
    },
  ]
}
