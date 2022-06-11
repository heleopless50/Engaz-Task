import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './blocks/root/app.component';


const routes: Routes = [
  { path: 'home', component: AppComponent },
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
