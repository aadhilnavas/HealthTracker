import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WorkoutsComponent } from './workouts/workouts.component';
import {WorkoutComparisonComponent} from './workoutComparison/workoutComparison.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Default route
  { path: 'workouts', component: WorkoutsComponent }, // Workout table
  { path: 'workoutComparison', component: WorkoutComparisonComponent }, // workout graph
  { path: '**', redirectTo: 'home' }, // Default route
];
