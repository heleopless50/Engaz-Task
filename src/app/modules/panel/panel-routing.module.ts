import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllCommentsComponent } from './all-comments/all-comments.component';
import { AllPostsComponent } from './all-posts/all-posts.component';
import { CommentControlComponent } from './comment-control/comment-control.component';
import { PostControlComponent } from './post-control/post-control.component';

const routes: Routes = [
  { path: 'posts/all', component: AllPostsComponent },
  { path: 'posts', redirectTo: 'posts/all' },
  { path: 'posts/control', component: PostControlComponent },
  { path: 'posts/control/:id', component: PostControlComponent },
  { path: 'comments/all', component: AllCommentsComponent },
  { path: 'comments/control', component: CommentControlComponent },
  { path: 'comments/control/:id', component: CommentControlComponent },
  { path: 'comments', redirectTo: 'comments/all' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PanelRoutingModule {}
