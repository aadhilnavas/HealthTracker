import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  userName = '';
  workoutType = '';
  workoutMinutes: number = 0;
  warmupMinutes: number = 1; //  Added warm-up input
  status = 'Not Completed';
  remainingTime: number = 60;
  interval: any;
  isPaused: boolean = false; // Track if the timer is paused
  fitnessTip = "Stay hydrated and warm up before workouts!";
  workoutTypes = ['Running', 'Cycling', 'Yoga', 'Swimming', 'Walking'];
  showMessage: boolean = false;
  workouts: any[] = [
    { name: 'John Doe', workoutType: 'Running', minutes: 30, date: new Date() }
  ];

  // Warm up timer settings

  startTimer() {
    if (this.interval) return;

    if (!this.isPaused) {
      //  If not resuming, calculate new time
      const warmupTime = this.warmupMinutes * 60;
      const workoutTime = this.workoutMinutes * 60;
      this.remainingTime = warmupTime + workoutTime;
    }

    this.isPaused = false; // Reset pause flag

    this.interval = setInterval(() => {
      if (this.remainingTime > 0) {
        this.remainingTime--;
      } else {
        clearInterval(this.interval);
        this.interval = null;
      }
    }, 1000);
  }

  pauseTimer() {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
      this.isPaused = true; //  Set pause flag
    }
  }

  resetTimer() {
    clearInterval(this.interval);
    this.isPaused = false; //  Reset pause state
    this.remainingTime = (this.warmupMinutes * 60) + (this.workoutMinutes * 60);
    this.interval = null;
  }


  // Home page Form Submission
  
  submitWorkout(event: Event) {
    event.preventDefault(); // Prevent page reload

    if (!this.userName || !this.workoutType || !this.workoutMinutes) {
      alert('Please fill out all required fields!');
      return;
    }

    this.showMessage = true;
    setTimeout(() => this.showMessage = false, 3000); // Hide message after 3 sec
}
}
