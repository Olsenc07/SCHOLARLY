import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { AppRoutingModule } from './app-routing.module';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSliderModule } from '@angular/material/slider';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatStepperModule } from '@angular/material/stepper';
import { IgxTimePickerModule } from 'igniteui-angular';
import { HammerModule } from '@angular/platform-browser';



import { routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { TermsComponent } from './terms/terms.component';
import { SearchComponent } from './search/search.component';
import { RetrievePasswordComponent } from './retrieve-password/retrieve-password.component';
import { ProfileComponent } from './profile/profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { GroupChatsComponent } from './group-chats/group-chats.component';
import { MainPagesComponent } from './main-pages/main-pages.component';
import { SignupComponent } from './signup/signup.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FriendsActivityComponent } from './friends-activity/friends-activity.component';
import { PostPageComponent } from './post-page/post-page.component';
import { ProfileBottomSheetComponent } from './profile/bottom-sheet/bottom-sheet.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    TermsComponent,
    RetrievePasswordComponent,
    ProfileComponent,
    EditProfileComponent,
    GroupChatsComponent,
    MainPagesComponent,
    SignupComponent,
    HomePageComponent,
    FriendsActivityComponent,
    PostPageComponent,
    SearchComponent,
    ProfileBottomSheetComponent,
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
    MatListModule,
    MatBadgeModule,
    MatSidenavModule,
    MatBottomSheetModule,
    MatSelectModule,
    MatDialogModule,
    MatCheckboxModule,
    MatTabsModule,
    MatStepperModule,
    HammerModule,
    IgxTimePickerModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
