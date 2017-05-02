import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { ListingsComponent } from './listings/listings.component';
import { SignUpComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';

import { WindowRef } from './_shared/window';
import { StickyNavDirective } from './nav/nav.sticky.directive';
import { AppRoutingModule } from './app-routing.module';
import { SubmitResumeComponent } from './submit-resume/submit-resume.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    ListingsComponent,
    SignUpComponent,
    LoginComponent,
    StickyNavDirective,
    FooterComponent,
    
    SubmitResumeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [WindowRef],
  bootstrap: [AppComponent]
})
export class AppModule { }
