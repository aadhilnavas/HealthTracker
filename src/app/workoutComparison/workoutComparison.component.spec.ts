import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutComparisonComponent } from './workoutComparison.component';

describe('WorkoutComparisonComponent', () => {
  let component: WorkoutComparisonComponent;
  let fixture: ComponentFixture<WorkoutComparisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkoutComparisonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkoutComparisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
