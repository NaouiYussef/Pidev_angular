import { Component, OnInit } from '@angular/core';
import { throwError } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PostModel } from 'src/app/model/post-model';
import { CommentPayload } from 'src/app/model/comment-model';
import { CommentService } from 'src/app/service/comment.service';
import { PostService } from 'src/app/service/post.service';


@Component({
  selector: 'app-view-post-front',
  templateUrl: './view-post-front.component.html',
  styleUrls: ['./view-post-front.component.css']
})
export class ViewPostFrontComponent implements OnInit {

  postId: number;
  post: PostModel;
  commentForm: FormGroup;
  commentPayload: CommentPayload;
  comments: CommentPayload[];
  Subcomments : CommentPayload[]
  showSubCommentReply = false;
  


  constructor(private postService: PostService, private activateRoute: ActivatedRoute,
    private commentService: CommentService, private router: Router) {
    this.postId = this.activateRoute.snapshot.params['id'];

    this.commentForm = new FormGroup({
      text: new FormControl('', Validators.required)
    });
    this.commentPayload = {
      userName: '',
      text: '',
      postId: this.postId,
      parentComment: '',
    };
  }

  ngOnInit(): void {
    this.getPostById();
    this.getCommentsForPost();
  }

  postComment() {
    this.commentPayload.text = this.commentForm.get('text').value;
    this.commentService.postComment(this.commentPayload).subscribe(data => {
      this.commentForm.get('text').setValue('');
      this.getCommentsForPost();
      
    }, error => {
      throwError(error);
    })
  }

  private getPostById() {
    this.postService.getPost(this.postId).subscribe(data => {
      this.post = data;
    }, error => {
      throwError(error);
    });
  }

  private getCommentsForPost() {
    this.commentService.getAllCommentsForPost(this.postId).subscribe(data => {
      this.comments = data;
    }, error => {
      throwError(error);
    });
  }

}
