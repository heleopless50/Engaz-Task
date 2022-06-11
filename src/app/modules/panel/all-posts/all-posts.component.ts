import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/core/models/post';
import { PostCrudService } from 'src/app/core/services/crud-services/post-crud.service';
import { PostsStorageService } from 'src/app/core/storage/posts-storage.service';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css'],
})
export class AllPostsComponent implements OnInit {
  posts: Post[] = [];
  constructor(
    private postCrudService: PostCrudService,
    private postsDB: PostsStorageService
  ) {}

  ngOnInit(): void {
    this.postCrudService.findAll().subscribe((posts) => {
      if (!this.postsDB.postsDb.length) {
        this.posts = posts;
        this.postsDB.postsDb = posts;
      } else {
        this.posts = this.postsDB.postsDb;
      }
    });
  }

  deletePost(id: any) {
    this.postsDB.postsDb = this.postsDB.postsDb.filter((post) => post.id != id);
    this.posts = this.postsDB.postsDb;
  }
}
