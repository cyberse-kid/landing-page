import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-smartrecruit',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './smartrecruit.html',
  styleUrls: ['./smartrecruit.css']
})
export class SmartrecruitComponent implements OnInit {

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    // Solo ejecutar en el navegador, no en el servidor
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo(0, 0);
    }
  }

  goBack(): void {
    this.router.navigate(['/']);
  }

  selectedImage: string | null = null;

  openImage(src: string) {
    this.selectedImage = src;
  }

  closeImage() {
    this.selectedImage = null;
  }

}