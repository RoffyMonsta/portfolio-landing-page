import { Component, OnInit } from '@angular/core';
import { IExperience, MY_EXPERIENCE } from './Experience';




@Component({
  selector: 'app-experience-calculator',
  templateUrl: './experience-calculator.component.html',
  styleUrls: ['./experience-calculator.component.scss'],
})
export class ExperienceCalculatorComponent implements OnInit {
  experienceToDisplay: string[] = [];



  ngOnInit(): void {
    this.calculateExperience(MY_EXPERIENCE);
  }

  calculateExperience(experience: IExperience[]) {
    experience.forEach((exp) => {
      const displayValue = `${exp.name}: ${this.calculateTimeGap(exp.startDate)}`;
      this.experienceToDisplay.push(displayValue);
    })
  }

  calculateTimeGap(startDate: Date) {
    const currentDate = new Date();
    const startYear = startDate.getFullYear();
    const startMonth = startDate.getMonth();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();

    const years = currentYear - startYear;
    const months = currentMonth - startMonth;

    let result = '';

    if (years > 0) {
        result += `${years} ${years === 1 ? 'year' : 'years'}`;
    }

    if (months > 0) {
        if (years > 0) {
            result += ' ';
        }
        result += `${months} ${months === 1 ? 'month' : 'months'}`;
    }

    if (result === '') {
        result = 'less than a month';
    }
    return result;
  }

}
