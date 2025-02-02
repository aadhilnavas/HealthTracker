import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-workouts',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './workouts.component.html',
  styleUrls: ['./workouts.component.css']
})
export class WorkoutsComponent {

  // default datas

  userData = [
    {
      id: 1,
      name: 'John Doe',
      workouts: [
        { type: 'Running', minutes: 30 },
        { type: 'Cycling', minutes: 45 }
      ]
    },
    {
      id: 2,
      name: 'Jane Smith',
      workouts: [
        { type: 'Swimming', minutes: 60 },
        { type: 'Running', minutes: 20 }
      ]
    },
    {
      id: 3,
      name: 'Mike Johnson',
      workouts: [
        { type: 'Yoga', minutes: 50 },
        { type: 'Cycling', minutes: 40 }
      ]
    },
    {
      id: 4,
      name: 'Johnson',
      workouts: [
        { type: 'Running', minutes: 50 },
        { type: 'Cycling', minutes: 40 }
      ]
    }
  ];

  currentPage: number = 1;
  itemsPerPage: number = 5;
  searchName: string = '';
  selectedWorkout: string = '';  workoutOptions = ['Running', 'Cycling', 'Yoga', 'Swimming', 'Walking'];

  newUserName: string = '';
  newWorkoutType1: string = '';
  newWorkoutMinutes1: number | null = null;
  newWorkoutType2: string = '';
  newWorkoutMinutes2: number | null = null;

  // Computed property for filtering and calculating totals
  get filteredWorkouts() {
    return this.userData
    .filter(user =>
      (this.searchName === '' || user.name.toLowerCase().includes(this.searchName.toLowerCase())) &&
      (this.selectedWorkout === '' || user.workouts.some(w => w.type === this.selectedWorkout))   
     )
      .map(user => ({
        ...user,
        totalWorkouts: user.workouts.length, // Count number of workouts
        totalMinutes: user.workouts.reduce((sum, w) => sum + w.minutes, 0), // Sum total minutes
        workoutTypes: user.workouts.map(w => w.type).join(', ') // List of workout types
      }))
      .slice((this.currentPage - 1) * this.itemsPerPage, this.currentPage * this.itemsPerPage);
  }

  get totalPages() {
    return Math.ceil(this.userData.length / this.itemsPerPage);
  }

  changePage(page: number) {
    if (page > 0 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  //  Add New Workout with Two Workout Options
  addWorkout() {
    if (this.newUserName && this.newWorkoutType1 && this.newWorkoutMinutes1) {
      const existingUser = this.userData.find(user => user.name.toLowerCase() === this.newUserName.toLowerCase());

      const newWorkouts = [
        { type: this.newWorkoutType1, minutes: this.newWorkoutMinutes1 },
        ...(this.newWorkoutType2 && this.newWorkoutMinutes2 ? [{ type: this.newWorkoutType2, minutes: this.newWorkoutMinutes2 }] : [])
      ];

      if (existingUser) {
        // Append workouts to the existing user
        existingUser.workouts.push(...newWorkouts);
      } else {
        // Add a new user with workouts
        this.userData.push({
          id: this.userData.length + 1,
          name: this.newUserName,
          workouts: newWorkouts
        });
      }

      // Clear input fields
      this.newUserName = '';
      this.newWorkoutType1 = '';
      this.newWorkoutMinutes1 = null;
      this.newWorkoutType2 = '';
      this.newWorkoutMinutes2 = null;
    }
  }
}
