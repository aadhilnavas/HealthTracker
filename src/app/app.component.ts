import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { WorkoutComparisonComponent } from './workoutComparison/workoutComparison.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent], // Import NavbarComponent
  template: `
    <app-navbar></app-navbar>  <!--  Include Navbar Component -->
    <div class="container mt-4">
      <router-outlet></router-outlet>  <!--  main home page datas -->
    </div>
    
  `,
})
export class AppComponent {}
