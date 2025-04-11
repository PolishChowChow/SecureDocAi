import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
import { IndexPageComponent } from './app/index-page/index-page.component';
import { LoginPageComponent } from './app/login-page/login-page.component';
import { NotFoundPageComponent } from './app/not-found-page/not-found-page.component';
import { RecoveryPasswordPageComponent } from './app/recovery-password-page/recovery-password-page.component';
import { RegisterPageComponent } from './app/register-page/register-page.component';


const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: 'register', component: RegisterPageComponent },
  { path: 'recovery-password', component: RecoveryPasswordPageComponent },
  { path: '', component: IndexPageComponent },
  { path: '**', component: NotFoundPageComponent },
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],
}).catch(err => console.error(err));

