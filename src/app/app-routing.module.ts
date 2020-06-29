import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Components/LoginPage/login/login.component';
import { AuthGuard } from './Guards/auth.guard';
import { DashboardComponent } from './Components/Pages/dashboard/dashboard.component';
import { ContactsComponent } from './Components/Pages/contacts/contacts.component';
import { AppComponent } from './app.component';
import { MainComponent } from './Components/main/main.component';


const routes: Routes = [
  {path: '', component: AppComponent, children: [
    {path: 'login', component: LoginComponent},
    {path: 'app', component: MainComponent, canActivate: [AuthGuard], canActivateChild: [AuthGuard], children: [
      {path: 'dashboard', component: DashboardComponent},
      {path: 'contacts', component: ContactsComponent}
    ]},
  ]},
  {path: 'contacts', component: ContactsComponent, canActivate: [AuthGuard]},
  {path: '', pathMatch: 'full', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
