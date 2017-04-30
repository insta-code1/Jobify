import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ListingsComponent } from './listings/listings.component';
// import { PageNotFoundComponent } from './';

const appRoutes: Routes = [
  {
     path: '', component: HomeComponent
  },
  { 
    path: 'jobs/listings', component: ListingsComponent 
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

