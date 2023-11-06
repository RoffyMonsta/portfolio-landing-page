import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceCalculatorComponent } from './experience-calculator.component';
import { IExperience } from './Experience';

describe('ExperienceCalculatorComponent', () => {
  let component: ExperienceCalculatorComponent;
  let fixture: ComponentFixture<ExperienceCalculatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExperienceCalculatorComponent]
    });
    fixture = TestBed.createComponent(ExperienceCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    // Initialize Jasmine clock to mock the current date
    jasmine.clock().install();
    const mockCurrentDate = new Date('2023-11-05');
    jasmine.clock().mockDate(mockCurrentDate);
    });

  afterEach(() => {
    // Uninstall Jasmine clock after each test
    jasmine.clock().uninstall();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should output corrent timegap', () => {
    const startDate = new Date('2021-03-22');
    const timeGap = component.calculateTimeGap(startDate);
    expect(timeGap).toEqual('2 years 8 months');
  });

  it('should handle start date in the past', () => {
    const startDate = new Date('2020-01-01');
    const timeGap = component.calculateTimeGap(startDate);
    expect(timeGap).toEqual('3 years 10 months');
  });

  it('should calculate experience', () => {
    const exp: IExperience[] = [
      {
        name: 'Test1',
        startDate: new Date('2021-03-22')
      },
      {
        name: 'Test2',
        startDate: new Date('2023-08-26')
      },
    ];
    component.experienceToDisplay = [];
    component.calculateExperience(exp);
    const expectedResult = [
      'Test1: 2 years 8 months',
      'Test2: 3 months'
    ];
    expect(component.experienceToDisplay).toEqual(expectedResult);
  });
});
