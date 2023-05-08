import { Component, OnInit } from '@angular/core';
import { throwError } from 'rxjs';
import { Router } from '@angular/router';
import { CreatePostPayload } from '../create-post/create-post.payload';
import { PostService } from 'src/app/service/post.service';
import { SubredditModel } from 'src/app/model/subreddit-model';
import { SubredditService } from 'src/app/service/subreddit.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { UserService } from 'src/app/user/user.service';


@Component({
  selector: 'app-create-post-front',
  templateUrl: './create-post-front.component.html',
  styleUrls: ['./create-post-front.component.css']
})
export class CreatePostFrontComponent implements OnInit {

  createPostForm: FormGroup;
  postPayload: CreatePostPayload;
  subreddits: Array<SubredditModel>;
   

  constructor(private router: Router, private postService: PostService, private userService : UserService,
    private subredditService: SubredditService) {
     
    this.postPayload = {
      postName: '',
      url: '',
      description: '',
      subredditName: ''
    }
  }

  ngOnInit() {
    
    this.createPostForm = new FormGroup({
      postName: new FormControl('', Validators.required),
      subredditName: new FormControl('', Validators.required),
      url: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
    });
    this.subredditService.getAllSubreddits().subscribe((data) => {
      this.subreddits = data;
    }, error => {
      throwError(error);
    });
  }

  createPost() {

    this.userService.getUserInfo().subscribe(user => {
      this.postPayload.postName = this.createPostForm.get('postName').value;
      this.postPayload.subredditName = this.createPostForm.get('subredditName').value;
      this.postPayload.url = this.createPostForm.get('url').value;
      this.postPayload.description = this.createPostForm.get('description').value;
  
      this.postService.createPost(this.postPayload).subscribe((data) => {
        this.router.navigateByUrl('/forum');
      }, error => {
        throwError(error);
      });
    }, error => {
      throwError(error);
    });
  }
  

  discardPost() {
    this.router.navigateByUrl('/');
  }

}
