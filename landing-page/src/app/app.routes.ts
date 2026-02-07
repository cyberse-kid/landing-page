import { Routes } from '@angular/router';
import { LandingComponent } from './landing';
import { GestionTributariaComponent } from './pages/sistema-gestion-tributaria/sistema-gestion-tributaria';
import { SmartrecruitComponent } from './pages/smartrecruit/smartrecruit';

export const routes: Routes = [
  { path: '', component: LandingComponent },  // ← Usa LandingComponent
  { path: 'proyecto/gestion-tributaria', component: GestionTributariaComponent },
  { path: 'proyecto/smartrecruit', component: SmartrecruitComponent },
  { path: '**', redirectTo: '' }
];