import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { find, map } from 'rxjs';
import { Post } from 'src/app/core/models/post';
import { PostCrudService } from 'src/app/core/services/crud-services/post-crud.service';
import { PostsStorageService } from 'src/app/core/storage/posts-storage.service';

@Component({
  selector: 'app-post-control',
  templateUrl: './post-control.component.html',
  styleUrls: ['./post-control.component.css'],
})
export class PostControlComponent implements OnInit {
  adding: boolean = true;
  post: Post = new Post();
  postId: Number = 0;
  form: FormGroup;
  posts: Post[] = [];
  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private postsDb: PostsStorageService,
    private router:Router
  ) {
    this.form = this.fb.group({
      id: ['true', [Validators.required]],
      userId: ['', [Validators.required]],
      title: ['', [Validators.required]],
      body: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.postId = +this.route.snapshot.params['id'];
    if (this.postId != 0) {
      this.postsDb.$postDb.subscribe((data) => {
        this.posts = data;
        this.post = this.posts.find((a) => a.id == this.postId) as Post;
        this.form.patchValue(this.post)
        if(this.post)this.adding = false;
      });
    }
  }

  // form getters
  get id() {
    return this.form.get('id')?.value;
  }

  get userId() {
    return this.form.get('userId')?.value;
  }

  get title() {
    return this.form.get('title')?.value;
  }

  get body() {
    return this.form.get('body')?.value;
  }

  submit() {
    if (this.adding) {
      let newData = [...this.posts,new Post(+this.posts[this.posts.length-1].id! + 1 , +this.userId, this.title, this.body)];
      // this.postsDb.addPost(newPost);
      this.postsDb.$postDb.next(newData);
    } else if (!this.adding) {
      console.log("gdfklgd;")
      let updatedPost = new Post(+this.id, +this.userId, this.title, this.body);
      this.postsDb.replacePost(this.posts,updatedPost, +this.id);

    }

this.router.navigate(["/panel/posts"])
  }
}
