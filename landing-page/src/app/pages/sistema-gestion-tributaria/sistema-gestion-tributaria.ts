import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gestion-tributaria',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sistema-gestion-tributaria.html',
  styleUrls: ['./sistema-gestion-tributaria.css']
})
export class GestionTributariaComponent {

  constructor(private router: Router) {}

  goBack(): void {
    this.router.navigate(['/']);
  }
}