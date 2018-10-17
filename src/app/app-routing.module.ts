import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { ListComponent } from './components/list/list.component';

import { AuthGuard } from './guards/auth.guard';
import { NoAuthGuard } from './guards/no-auth.guard';

const routes: Routes = [
  // The /login path can only be activated if no user is signed in
  { path: 'login', component: LoginComponent, canActivate: [NoAuthGuard] },

  // The / (main) path can only be activated if an user is signed in
  { path: '', component: ListComponent, canActivate: [AuthGuard] },

  // Any other path tries to redirect to /
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})

export class AppRoutingModule { }
