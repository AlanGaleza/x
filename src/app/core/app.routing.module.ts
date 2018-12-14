import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserComponent} from '../user/user.component';
import {LoginComponent} from '../login/login.component';

const routes: Routes = [
  {path: 'user', component: UserComponent},
  {path: 'signin', component: LoginComponent},
  {path: 'logout', component: UserComponent},
  {path: '', redirectTo: '/signin', pathMatch: 'full'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule {
}
