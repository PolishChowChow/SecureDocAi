import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { RecoveryPasswordPageComponent } from './recovery-password-page/recovery-password-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { IndexPageComponent } from './index-page/index-page.component';

@NgModule({
  declarations: [
    // AppComponent,
    LoginPageComponent,
    RegisterPageComponent,
    RecoveryPasswordPageComponent,
    NotFoundPageComponent,
    IndexPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
