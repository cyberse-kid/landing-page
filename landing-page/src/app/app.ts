import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class LandingPageComponent {

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

  // Función para enviar email (puedes implementar con un servicio backend)
  sendEmail(): void {
    // Opción 1: Abrir cliente de correo del usuario
    const subject = `Mensaje de ${this.contactForm.name}`;
    const body = `Nombre: ${this.contactForm.name}%0D%0AEmail: ${this.contactForm.email}%0D%0A%0D%0AMensaje:%0D%0A${this.contactForm.message}`;
    window.location.href = `mailto:nicolas.contreras76@inacapmail.cl?subject=${subject}&body=${body}`;
    
    // Limpiar formulario
    this.contactForm = {
      name: '',
      email: '',
      message: ''
    };

    // Opción 2: Si quieres integrar un servicio de email backend (EmailJS, SendGrid, etc.)
    // this.emailService.sendEmail(this.contactForm).subscribe(...);
  }
}