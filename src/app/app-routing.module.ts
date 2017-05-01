import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ListingsComponent } from './listings/listings.component';
import { SignUpComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

// import { PageNotFoundComponent } from './';

const appRoutes: Routes = [
  {
     path: '', component: HomeComponent
  },
  { 
    path: 'jobs/listings', component: ListingsComponent 
  },
  {
    path: 'register', component: SignUpComponent
  },
  {
    path: 'login', component: LoginComponent
  }
  // { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: []
})
export class AppRoutingModule {  }

