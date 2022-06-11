import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PanelRoutingModule } from './panel-routing.module';
import { AllPostsComponent } from './all-posts/all-posts.component';
import { PostControlComponent } from './post-control/post-control.component';
import { CommentControlComponent } from './comment-control/comment-control.component';
import { AllCommentsComponent } from './all-comments/all-comments.component';


@NgModule({
  declarations: [AllPostsComponent,PostControlComponent,AllCommentsComponent, CommentControlComponent],
  imports: [
    CommonModule,
    PanelRoutingModule
  ]
})
export class PanelModule { }
