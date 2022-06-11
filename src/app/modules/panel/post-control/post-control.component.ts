import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/core/models/post';
import { PostCrudService } from 'src/app/core/services/crud-services/post-crud.service';

@Component({
  selector: 'app-post-control',
  templateUrl: './post-control.component.html',
  styleUrls: ['./post-control.component.css'],
})
export class PostControlComponent implements OnInit {
  title: string = '';
  post: Post = new Post();
  postId: Number = 0;
  form?: any;
  constructor(
    private postsCrud: PostCrudService,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.postId = +this.route.snapshot.params['id'];
    if (this.postId != 0)
      this.postsCrud
        .findOne(this.postId)
        .subscribe((data) => (this.post = data));
    this.fb.group({
      id:["",[Validators.required]],
      userId:[""],
      title:[""],
      body:[""]
    });
  }
}
