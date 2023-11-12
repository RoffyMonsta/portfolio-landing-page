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
          positionName: 'Middle Full-Stack Engineer'
        },
        {
          positionDate:  'DEC 2021 - OCT 2022',
          positionName: 'Junior Full-Stack Engineer'
        }
      ],
      projects: [
        {
          projectDate: 'DEC 2021 - PRESENT',
          projectLink: 'https://babyscripts.com/',
          projectName: 'Babyscripts',
          projectDescription: "Working as an outstaff engineer in a US based team on a US based startup that provides better pregnancies for patients."
        }
      ],
      achievements: [
        "Implemented state management in the existing system resulted in a reduction of bugs and an increase in the speed of the application",
        "Migrated an old version of an Angular web application into a micro-frontend system with root component and shared dependencies",
        "Configured the build of multiple mobile applications with different configurations using the same codebase"
      ]
    },
    {
      date: 'MAR 2021 - DEC 2021',
      companyName: 'Regulus Team',
      companyLink: 'https://www.regulus.team/en/',
      positions: [
        {
          positionDate:  'MAR 2021 - DEC 2021',
          positionName: 'Junior Frontend Engineer'
        }
      ],
      projects: [
        {
          projectDate: 'MAR 2021 - DEC 2021',
          projectName: 'Family Shopping',
          projectDescription: "This project is focused on creating a great app and a website to generate shopping lists for the whole family."
        }
      ],
      achievements: [
        "Attended all the Scrum ceremonies and was pro-active on meetings",
        "Created a fully functional website using Angular and NgXs to manipulate with shopping lists",
        "Created a fully functional mobile application using Ionic and Angular"
      ]
    },
  ]
}
