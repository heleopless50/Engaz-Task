import { Component, OnInit } from '@angular/core';
import { Commenta } from 'src/app/core/models/commenta';
import { CommentCrudService } from 'src/app/core/services/crud-services/comment-crud.service';
import { CommentsStorageService } from 'src/app/core/storage/comments-storage.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-all-comments',
  templateUrl: './all-comments.component.html',
  styleUrls: ['./all-comments.component.css']
})
export class AllCommentsComponent implements OnInit {

  pageNumber: number = 0;
  startIndex: number = 0;
  comments: Commenta[] = [];
  constructor(
    private commentCrudService: CommentCrudService,
    private commentsDb: CommentsStorageService,
    private toastr:ToastrService
  ) {}
  ngDoCheck(): void {
    this.pageNumber = Math.ceil(this.comments.length / 100);
  }

  ngOnInit(): void {
    this.commentCrudService.findAll().subscribe((comments) => {
      if (!this.commentsDb.gotData) {
        this.commentsDb.$commentDb.next(comments);
        this.commentsDb.gotData = true;
      }
      this.pageNumber = Math.ceil(comments.length / 100);
    });

    this.commentsDb.$commentDb.subscribe((comments) => (this.comments = comments));
  }

  deleteComment(id: any) {
    this.toastr.info("Comment Deleted Successfully","deleted")
    this.comments = this.comments.filter((a) => a.id != id);
    this.commentsDb.$commentDb.next(this.comments);
    this.pageNumber = Math.ceil(this.comments.length / 100);
  }

  otherPage(x: number) {
    this.startIndex = x * 100 - 1 + 1;
  }
}
