import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Commenta } from 'src/app/core/models/commenta';
import { CommentsStorageService } from 'src/app/core/storage/comments-storage.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-comment-control',
  templateUrl: './comment-control.component.html',
  styleUrls: ['./comment-control.component.css'],
})
export class CommentControlComponent implements OnInit {
  adding: boolean = true;
  comment: Commenta = new Commenta();
  commentId: Number = 0;
  form: FormGroup;
  comments: Commenta[] = [];
  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private commentsDb: CommentsStorageService,
    private router: Router,
    private toastr : ToastrService
  ) {
    this.form = this.fb.group({
      id: ['true', [Validators.required]],
      postId: ['', [Validators.required]],
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      body: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.commentId = +this.route.snapshot.params['id'];
    if (this.commentId != 0) {
      this.commentsDb.$commentDb.subscribe((data) => {
        this.comments = data;
        this.comment = this.comments.find(
          (a) => a.id == this.commentId
        ) as Commenta;
        this.form.patchValue(this.comment);
        if (this.comment) this.adding = false;
      });
    }
  }

  // form getters
  get id() {
    return this.form.get('id')?.value;
  }

  get postId() {
    return this.form.get('postId')?.value;
  }

  get name() {
    return this.form.get('name')?.value;
  }

  get email() {
    return this.form.get('email')?.value;
  }

  get body() {
    return this.form.get('body')?.value;
  }

  submit() {
    if (this.adding) {
      this.toastr.success('Comment Added Successfully','adding post')
      let newData = [
        ...this.comments,
        new Commenta(
          +this.comments[this.comments.length - 1].id! + 1,
          +this.postId,
          this.name,
          this.email,
          this.body
        ),
      ];
      this.commentsDb.$commentDb.next(newData);
    } else if (!this.adding) {
      this.toastr.success('Comment Updated Successfully','update post')
      let updatedComment = new Commenta(
        +this.id,
        +this.postId,
        this.name,
        this.email,
        this.body
      );
      this.commentsDb.replaceComment(this.comments, updatedComment, +this.id);
    }

    this.router.navigate(['/panel/comments']);
  }
}
