import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-workout-comparison',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './workoutComparison.component.html',
  styleUrls: ['./workoutComparison.component.css']
})
export class WorkoutComparisonComponent implements AfterViewInit {
  @ViewChild('workoutChart') chartRef!: ElementRef;

  ngAfterViewInit() {
    requestAnimationFrame(() => this.createChart());
  }

  createChart() {
    if (!this.chartRef) return;

    new Chart(this.chartRef.nativeElement, {
      type: 'bar',
      data: {
        labels: ['John Doe', 'Jane Smith', 'Mike Johnson'],
        datasets: [
          { label: 'Running', data: [30, 20, 15], backgroundColor: 'red' },
          { label: 'Cycling', data: [45, 25, 40], backgroundColor: 'blue' },
          { label: 'Swimming', data: [0, 60, 10], backgroundColor: 'green' },
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { position: 'top' } },
        scales: { y: { beginAtZero: true } }
      }
    });
  }
}
