import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [FormsModule, RouterModule, CommonModule],
  templateUrl: './landing.html',
  styleUrls: ['./landing.css']
})
export class LandingComponent {

  // ← ESTA PROPIEDAD FALTABA
  contactForm = {
    name: '',
    email: '',
    message: ''
  };

  constructor(private router: Router) {}

  // Función para hacer scroll suave a las secciones
  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    }
  }

  // Navegar a los componentes de proyectos
  navigateToProject(projectName: string): void {
    this.router.navigate(['/proyecto', projectName]);
  }

  // Función para enviar email
  sendEmail(): void {
    const subject = `Mensaje de ${this.contactForm.name}`;
    const body = `Nombre: ${this.contactForm.name}%0D%0AEmail: ${this.contactForm.email}%0D%0A%0D%0AMensaje:%0D%0A${this.contactForm.message}`;
    window.location.href = `mailto:nicolas.contreras76@inacapmail.cl?subject=${subject}&body=${body}`;
    
    // Limpiar formulario
    this.contactForm = {
      name: '',
      email: '',
      message: ''
    };
  }
}