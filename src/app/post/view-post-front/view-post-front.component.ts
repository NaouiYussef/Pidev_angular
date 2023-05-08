import { Component, OnInit } from '@angular/core';
import { throwError } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators, Form } from '@angular/forms';
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
  testSub: boolean;
  postId: number;
  parentCommentId: number;
 // commentId: number;
  post: PostModel;
  commentForm: FormGroup;
  SubcommentForm : FormGroup;

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

    this.SubcommentForm = new FormGroup({
      text: new FormControl('', Validators.required)
    });
    
    this.commentPayload = {
      userName: 'changeme',
      text: '',
      postId: this.postId,
      sub: this.testSub,
      parentCommentId :this.parentCommentId
      //commentId: this.commentId
    };
  }

  ngOnInit(): void {
    this.testSub=false;
    this.getPostById();
    this.getCommentsForPost();
    
  }

  postComment() {
    this.commentPayload.text = this.commentForm.get('text').value;
    this.commentService.postComment(this.commentPayload).subscribe(data => {
      this.commentForm.get('text').setValue('');
      this.getCommentsForPost();
      this.testSub = false;
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
      
    console.log("size is : ", this.comments.length)
    for(let i=0;i<this.comments.length;i++)
        console.log("traaah", this.comments[i].sub)
    }, error => {
      throwError(error);
    });
  }

  postSubComment(id: number) {
    this.commentPayload.text = this.SubcommentForm.get('text').value;
   
    this.commentService.createSubComment(this.commentPayload, id).subscribe(data => {
    this.SubcommentForm.reset();  
    this.testSub = true;
      this.getCommentsForPost();
    }, error => {
      throwError(error);
    });
  }
  
  

}