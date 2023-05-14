import { Component, OnInit } from '@angular/core';
import {Feedback, Type} from "../feedback";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {FeedbackService} from "../feedback.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-feedback-back-v',
  templateUrl: './feedback-back-v.component.html',
  styleUrls: ['./feedback-back-v.component.css']
})
export class FeedbackBackVComponent implements OnInit {

  id:number;
  feedback=new Feedback();
  apiServerUrl = 'http://localhost:8080';
  f:string;
  displayForm = true;
  feedbackForm: FormGroup;
  constructor(private feedbackService:FeedbackService  ,  private router: Router,
              private route:ActivatedRoute,private fb: FormBuilder) { }
  openFormm() {
    this.displayForm = true;
  }

  closeForm() {
    this.displayForm = false;
  }
  submitForm(): void {
    this.feedbackService.valdFeedback(this.id,this.f).subscribe(
      (response) => {

          // Redirect to the sign in page

      },
      (error) => {
        console.log(error);
      }
    );
    this.closeForm();
  }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
    this.feedbackForm = this.fb.group({
      response: ['', Validators.required],
    });
  }

}