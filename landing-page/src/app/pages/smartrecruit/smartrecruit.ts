import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-smartrecruit',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './smartrecruit.html',
  styleUrls: ['./smartrecruit.css']
})
export class SmartrecruitComponent {

  constructor(private router: Router) {}

  goBack(): void {
    this.router.navigate(['/']);
  }
}