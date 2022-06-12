import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Commenta } from '../models/commenta';

@Injectable({
  providedIn: 'root'
})
export class CommentsStorageService {
  gotData: boolean = false;
  allComments: Commenta[] = [];
  updatedComments: Commenta[] = [];
  $commentDb: BehaviorSubject<Commenta[]> = new BehaviorSubject<Commenta[]>([]);

  commentsDb: Commenta[] = [];

  constructor() {}

  addComment(comment: Commenta) {
    this.commentsDb.push(comment);
  }

  replaceComment(comments: Commenta[], comment: Commenta, id: Number) {
    let y = comments.find((a) => a.id == comment.id);
    if (y) {
      y.postId = comment.postId;
      y.name = comment.name;
      y.email = comment.email;
      y.body = comment.body;
    }
    this.$commentDb.next(comments);
  }





}
