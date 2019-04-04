import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SafeUrlPipe } from './utils/safe-url.pipe';
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HttpModule } from '@angular/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LandingComponent } from './landing/landing.component';
import { FooterComponent } from './footer/footer.component';
import { RegisterComponent } from './register/register.component';
import { MaterializeModule } from 'angular2-materialize';
import { SportComponent } from './sport/sport.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore'; 
import { environment } from 'src/environments/environment';
import { ContactComponent } from './contact/contact.component';
import { SituatieInscrieriComponent } from './situatie-inscrieri/situatie-inscrieri.component';
import { SportsLoginComponent } from './admin/sports-login/sports-login.component';
import { AngularFireAuthModule } from 'angularfire2/auth';
@NgModule({
  declarations: [
    AppComponent,
    SafeUrlPipe,
    LandingComponent,
    FooterComponent,
    RegisterComponent,
    SportComponent,
    ContactComponent,
    SituatieInscrieriComponent,
    SportsLoginComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    ReactiveFormsModule,
    DragDropModule,
    HttpClientModule,
    HttpModule,
    AppRoutingModule,
    FlexLayoutModule,
    FormsModule,
    MaterializeModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
