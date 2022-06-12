import { ThisReceiver } from '@angular/compiler';
import { LEADING_TRIVIA_CHARS } from '@angular/compiler/src/render3/view/template';
import { AfterViewInit, Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { filter, map, take } from 'rxjs';
import { Post } from 'src/app/core/models/post';
import { PostCrudService } from 'src/app/core/services/crud-services/post-crud.service';
import { PostsStorageService } from 'src/app/core/storage/posts-storage.service';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css'],
})
export class AllPostsComponent implements OnInit , DoCheck{
  pageNumber: number = 0;
  startIndex: number = 0;
  posts: Post[] = [];
  constructor(
    private postCrudService: PostCrudService,
    private postsDB: PostsStorageService
  ) {}
  ngDoCheck(): void {
    this.pageNumber = Math.ceil(this.posts.length / 10);
  }

  ngOnInit(): void {
    this.postCrudService.findAll().subscribe((posts) => {
      if (!this.postsDB.gotData) {
        this.postsDB.$postDb.next(posts);
        this.postsDB.gotData = true;
      }
      this.pageNumber = Math.ceil(posts.length / 10);
    });

    this.postsDB.$postDb.subscribe((posts) => (this.posts = posts));
  }

  deletePost(id: any) {
    this.posts = this.posts.filter((a) => a.id != id);
    this.postsDB.$postDb.next(this.posts);
    this.pageNumber = Math.ceil(this.posts.length / 10);
  }

  otherPage(x: number) {
    this.startIndex = x * 10 - 1 + 1;
  }
}
