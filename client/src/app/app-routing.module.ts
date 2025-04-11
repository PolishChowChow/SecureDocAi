import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'login', loadComponent: () => import('./login-page/login-page.component').then(m => m.LoginPageComponent)  },
  { path: 'register', loadComponent: () => import('./register-page/register-page.component').then(m => m.RegisterPageComponent)  },
  { path: 'recovery-password', loadComponent: () => import('./recovery-password-page/recovery-password-page.component').then(m => m.RecoveryPasswordPageComponent)  },
  { path: '', loadComponent: () => import('./index-page/index-page.component').then(m => m.IndexPageComponent)  },
  { path: '**', loadComponent: () => import('./not-found-page/not-found-page.component').then(m => m.NotFoundPageComponent) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
