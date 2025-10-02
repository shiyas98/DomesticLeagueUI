import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddtournamentComponent } from './tournament/addtournament/addtournament.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  
  // Placeholder routes - these would be implemented with actual components in a real app
  { path: 'tournaments', component: DashboardComponent }, // Temporary redirect to dashboard
  { path: 'add-tournament', component: AddtournamentComponent }, // Temporary redirect to dashboard
  { path: 'teams', component: DashboardComponent }, // Temporary redirect to dashboard
  { path: 'add-team', component: DashboardComponent }, // Temporary redirect to dashboard
  { path: 'matches', component: DashboardComponent }, // Temporary redirect to dashboard
  { path: 'results', component: DashboardComponent }, // Temporary redirect to dashboard
  { path: 'players', component: DashboardComponent }, // Temporary redirect to dashboard
  { path: 'add-player', component: DashboardComponent }, // Temporary redirect to dashboard
  { path: 'settings', component: DashboardComponent }, // Temporary redirect to dashboard
  
  // Tournament detail route with parameter
  { path: 'tournament/:id', component: DashboardComponent }, // Temporary redirect to dashboard
  { path: 'tournament/:id/add-match', component: DashboardComponent }, // Temporary redirect to dashboard
  
  // Wildcard route - must be last
  { path: '**', redirectTo: '/dashboard' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
