import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './Components/LoginPage/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OverlayModule } from "@angular/cdk/overlay";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { ScreenLoaderComponent } from './Components/Shared/spinner/screen-loader/screen-loader.component';
import { NavbarTopComponent } from './Components/Shared/navbar-top/navbar-top.component';
import { DashboardComponent } from './Components/Pages/dashboard/dashboard.component';
import { LogoChangeableComponent } from './Components/Shared/logo-changeable/logo-changeable.component';
import { LeftMenuComponent } from './Components/Shared/left-menu/left-menu.component';
import { StoreModule, MetaReducer } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromAuth from "./Store/reducers/auth.reducers";
import * as fromContacts from "./Store/reducers/contacts.reducer";
import { AuthEffects } from './Store/effects/auth.effects';
import { AppEffects } from './Store/effects/app.effects';
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from 'src/environments/environment';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { StoreRouterConnectingModule } from "@ngrx/router-store";
import { localStorageSyncReducer } from './Store/reducers/localstorage-sync.reducer';
import { AuthInterceptor } from "./interceptors/auth.interceptor";
import { ContactEffects } from "./Store/effects/contacts.effects";
import { ContactsComponent } from './Components/Pages/contacts/contacts.component';
import { MainComponent } from './Components/main/main.component';
const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer] ;

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ScreenLoaderComponent,
    NavbarTopComponent,
    DashboardComponent,
    LogoChangeableComponent,
    LeftMenuComponent,
    ContactsComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    OverlayModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatIconModule,
    StoreModule.forRoot({auth: fromAuth.authReducer, contacts: fromContacts.reducer}, {metaReducers}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
    EffectsModule.forRoot([AuthEffects, ContactEffects, AppEffects]),
    StoreRouterConnectingModule.forRoot()
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
  }
 }
