import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from './auth/auth-guard.guard';
import { MainButtonsComponent } from './blocks/main-buttons/main-buttons.component';

const routes: Routes = [
  { path: 'home', component: MainButtonsComponent },
  {
    path: 'panel',
    loadChildren: () =>
      import('./modules/panel/panel.module').then((x) => x.PanelModule),canActivate: [AuthGuardGuard]
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./auth/auth.module').then((x) => x.AuthModule),
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
