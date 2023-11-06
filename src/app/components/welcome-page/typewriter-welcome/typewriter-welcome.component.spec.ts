import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { TypewriterWelcomeComponent } from './typewriter-welcome.component';
import { Subject } from 'rxjs';

describe('TypewriterWelcomeComponent', () => {
  let component: TypewriterWelcomeComponent;
  let fixture: ComponentFixture<TypewriterWelcomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TypewriterWelcomeComponent]
    });
    fixture = TestBed.createComponent(TypewriterWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should animate text properly', fakeAsync(() => {
    component.textToShow = 'Hello'; // Set the text to be shown
    component['destroy$'] = new Subject<void>(); // Create a destroy$ subject

    component.startTextAnimation(); // Call the animation function

    // Advance the timer by 200 milliseconds (the interval duration)
    tick(200);
    expect(component.currentTextToShow).toBe('H');

    // Advance the timer by another 200 milliseconds
    tick(200);
    expect(component.currentTextToShow).toBe('He');

    // Advance the timer until the animation is complete (1000 milliseconds for 'Hello')
    tick(600);
    expect(component.currentTextToShow).toBe('Hello');

    // Advance the timer by 2000 milliseconds (for the setTimeout)
    tick(2000);
    expect(component.currentTextToShow).toBe('');

    // Destroy the component (this will complete the interval observable)
    component['destroy$'].next();
    tick();

    // After destroying, the animation should not continue even if time passes
    tick(2000);
    expect(component.currentTextToShow).toBe('');
  }));
});
