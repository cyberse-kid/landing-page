import { Routes } from '@angular/router';
import { LandingPageComponent } from './app';
import { GestionTributariaComponent } from './pages/sistema-gestion-tributaria/sistema-gestion-tributaria';
import { SmartrecruitComponent } from './pages/smartrecruit/smartrecruit';

export const routes: Routes = [
  { 
    path: '', 
    component: LandingPageComponent 
  },
  { 
    path: 'proyecto/gestion-tributaria', 
    component: GestionTributariaComponent 
  },
  { 
    path: 'proyecto/smartrecruit', 
    component: SmartrecruitComponent 
  },
  { 
    path: '**', 
    redirectTo: '' 
  }
];