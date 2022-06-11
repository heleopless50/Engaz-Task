import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: 'posts/all', component: ProductListComponent },
  // { path: 'posts/control', component: ProductListComponent },
  // { path: 'comments/all', component: ProductListComponent },
  // { path: 'comments/control', component: ProductListComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PanelRoutingModule { }
