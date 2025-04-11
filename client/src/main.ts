import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';

export const routes: Routes = [
  { path: 'login', loadComponent: () => import('./app/login-page/login-page.component').then(m => m.LoginPageComponent)  },
  { path: 'register', loadComponent: () => import('./app/register-page/register-page.component').then(m => m.RegisterPageComponent)  },
  { path: 'recovery-password', loadComponent: () => import('./app/recovery-password-page/recovery-password-page.component').then(m => m.RecoveryPasswordPageComponent)  },
  { path: '', loadComponent: () => import('./app/index-page/index-page.component').then(m => m.IndexPageComponent)  },
  { path: '**', loadComponent: () => import('./app/not-found-page/not-found-page.component').then(m => m.NotFoundPageComponent) },
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],
}).catch(err => console.error(err));

