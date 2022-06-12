import { Injectable } from '@angular/core';
import { BehaviorSubject, delay, map, Observable, of, Subject } from 'rxjs';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root',
})
export class PostsStorageService {
  gotData: boolean = false;
  allPosts: Post[] = [];
  updatedPosts: Post[] = [];
  $postDb: BehaviorSubject<Post[]> = new BehaviorSubject<Post[]>([]);

  postsDb: Post[] = [];

  constructor() {}

  addPost(post: Post) {
    this.postsDb.push(post);
  }

  replacePost(posts: Post[], post: Post, id: Number) {
    let y = posts.find((a) => a.id == post.id);
    if (y) {
      y.userId = post.userId;
      y.title = post.title;
      y.body = post.body;
    }
    this.$postDb.next(posts);
  }







}
