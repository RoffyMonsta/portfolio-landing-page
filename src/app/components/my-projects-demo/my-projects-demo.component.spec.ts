import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProjectsDemoComponent } from './my-projects-demo.component';

describe('MyProjectsDemoComponent', () => {
  let component: MyProjectsDemoComponent;
  let fixture: ComponentFixture<MyProjectsDemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyProjectsDemoComponent]
    });
    fixture = TestBed.createComponent(MyProjectsDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
