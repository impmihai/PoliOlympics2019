import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from '../landing/landing.component';
import { RegisterComponent } from '../register/register.component';
import { SportComponent } from '../sport/sport.component';
import { ContactComponent } from '../contact/contact.component';
import { SituatieInscrieriComponent } from '../situatie-inscrieri/situatie-inscrieri.component';
import { SportsLoginComponent } from '../admin/sports-login/sports-login.component';
import { ScoruriLiveComponent } from '../scoruri-live/scoruri-live.component';

const app_Routes: Routes = [
  // { path: '', redirectTo: 'login', pathMatch: 'full'},
  // { path: 'login', component: LoginComponent},
  // { path: 'not-found', component: ErrorPageComponent},
  { path: '', component: LandingComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'sports/:id', component: SportComponent},
  { path: 'inscrisi', component: SituatieInscrieriComponent},
  { path: 'admin', component: SportsLoginComponent},
  { path: 'live', component: ScoruriLiveComponent},
  { path: '**', redirectTo: 'not-found' } // this should always be the last route!
  /* { path: '', redirectTo: '/somewhere-else', pathMatch: 'full' }
   * Since the default matching strategy is "prefix",
   *  Angular checks if the path you entered in the URL does start
   *  with the path specified in the route. Of course every path starts with ''.
   * To fix this behavior, you need to change the matching strategy to "full".
   */
];

@NgModule({
  imports: [
      // RouterModule.forRoot(app_Routes, {useHash: true})
      // useHash so your web server doesn't resolve the url before the web client(angular)
      RouterModule.forRoot(app_Routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
