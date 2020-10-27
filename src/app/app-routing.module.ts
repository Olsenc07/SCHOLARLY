import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { FriendsActivityComponent } from './friends-activity/friends-activity.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProfileComponent } from './profile/profile.component';
import { RetrievePasswordComponent } from './retrieve-password/retrieve-password.component';
import { SearchComponent } from './search/search.component';
import { SignupComponent } from './signup/signup.component';
import { TermsComponent } from './terms/terms.component';

export const routingComponents = [
  HomePageComponent,
  SignupComponent,
  TermsComponent,
  ProfileComponent,
];

const routes: Routes = [
  { path: 'login', component: HomePageComponent },
  { path: 'sign-up', component: SignupComponent },
  { path: 'terms', component: TermsComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'retrieve-password', component: RetrievePasswordComponent },
  { path: 'search', component: SearchComponent },
  { path: 'edit-profile', component: EditProfileComponent },
  { path: 'friends-activity', component: FriendsActivityComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  bootstrap: [AppComponent],
})
export class AppRoutingModule {}
