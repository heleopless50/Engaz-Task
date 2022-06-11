import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainButtonsComponent } from './blocks/main-buttons/main-buttons.component';


const routes: Routes = [
  { path: 'home', component: MainButtonsComponent },
  {path: 'panel',
  loadChildren: () =>
    import('./modules/panel/panel.module').then((x) => x.PanelModule),
},
  { path: '', redirectTo: '/home', pathMatch: 'full' },


];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
