import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

import { LoginComponent } from '../../components/login/login.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModalModule
  ],
  declarations: [
    LoginComponent
  ],
  exports: [
    LoginComponent
  ]
})
export class AuthenticationModule { }
