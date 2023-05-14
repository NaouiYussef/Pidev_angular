import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FeedbackService} from "../feedback.service";
import {Feedback, Type} from "../feedback";
import {FeedbackVald} from "../feedback-vald";
import {HttpErrorResponse} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../user/user.service";

@Component({
  selector: 'app-feedback-b',
  templateUrl: './feedback-b.component.html',
  styleUrls: ['./feedback-b.component.css']
})
export class FeedbackBComponent implements OnInit {
  apiServerUrl = 'http://localhost:8080';
  public feedbacks: Feedback[] = [];
  @Output() openFormm = new EventEmitter<void>();


  constructor(private feedbackService:FeedbackService  ,  private router: Router,
  private route:ActivatedRoute,private fb: FormBuilder) { }

  public getFeedbackss(): void {

    const url = `${this.apiServerUrl}/feedback/showAll`; // construct the URL
    this.feedbackService.getFeedbackss(url).subscribe(
      (response: Feedback[]) => {
        this.feedbacks = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message)
      }
    )

  }

  ngOnInit(): void {
    this.getFeedbackss();


  }
}
