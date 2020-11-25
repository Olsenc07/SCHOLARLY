import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatSliderModule} from '@angular/material/slider';

import { AppComponent } from './app.component';
import { TermsComponent } from './terms/terms.component';
import { SearchComponent } from './search/search.component';
import { RetrievePasswordComponent } from './retrieve-password/retrieve-password.component';
import { ProfileComponent } from './profile/profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { GroupChatsComponent } from './group-chats/group-chats.component';
import { MainPagesComponent } from './main-pages/main-pages.component';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { SignupComponent } from './signup/signup.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FriendsActivityComponent } from './friends-activity/friends-activity.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    TermsComponent,
    SearchComponent,
    RetrievePasswordComponent,
    ProfileComponent,
    EditProfileComponent,
    GroupChatsComponent,
    MainPagesComponent,
    SignupComponent,
    HomePageComponent,
    FriendsActivityComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MatToolbarModule,
    FormsModule,
    MatInputModule,
    MatIconModule,
    MatMomentDateModule,
    MatButtonModule,
    FlexLayoutModule,
    MatDatepickerModule,
    MatTooltipModule,
    MatRadioModule,
    MatSlideToggleModule,
    MatMenuModule,
    ReactiveFormsModule,
    MatSliderModule,
    FontAwesomeModule,
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
