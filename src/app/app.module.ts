import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AuthenticationModule } from './modules/authentication/authentication.module';
import { AppRoutingModule } from './app-routing.module';
import { ContentModule } from './modules/content/content.module';

import { AppComponent } from './app.component';

import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    BrowserModule,

    // Custom modules
    AuthenticationModule,
    AppRoutingModule,
    ContentModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
