import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SubredditModel } from 'src/app/model/subreddit-model';
import { Router } from '@angular/router';
import { SubredditService } from 'src/app/service/subreddit.service';

@Component({
  selector: 'app-create-subreddit-front',
  templateUrl: './create-subreddit-front.component.html',
  styleUrls: ['./create-subreddit-front.component.css']
})
export class CreateSubredditFrontComponent implements OnInit {

  createSubredditForm: FormGroup;
  subredditModel: SubredditModel = {} as SubredditModel;

  constructor(private router: Router, private subredditService: SubredditService) {
    this.createSubredditForm = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)
    });
  }

  ngOnInit() {
  }

  discard() {
    this.router.navigateByUrl('/forum');
  }

  createSubreddit() {
    this.subredditModel.name = this.createSubredditForm.get('title').value;
    this.subredditModel.description = this.createSubredditForm.get('description').value;
    this.subredditService.createSubreddit(this.subredditModel).subscribe(data => {
      this.router.navigateByUrl('/forum');
    }, error => {
      console.log('Error occurred');
    })
  }
}