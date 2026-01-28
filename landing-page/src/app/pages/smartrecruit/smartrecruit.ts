import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-smartrecruit',
  templateUrl: './smartrecruit.html',
  styleUrls: ['./smartrecruit.css']
})
export class SmartrecruitComponent {

  constructor(private router: Router) {}

  goBack(): void {
    this.router.navigate(['/']);
  }
}