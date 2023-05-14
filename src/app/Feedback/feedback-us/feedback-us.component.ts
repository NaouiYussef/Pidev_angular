import { Component, OnInit } from '@angular/core';
import {Product} from "../../Product/product";
import {Feedback} from "../feedback";
import{FeedbackService} from "../feedback.service";
import {HttpErrorResponse} from "@angular/common/http";
import {FeedbackVald} from "../feedback-vald";
import {UserService} from "../../user/user.service";
import {User} from "../../user/user";

@Component({
  selector: 'app-feedback-us',
  templateUrl: './feedback-us.component.html',
  styleUrls: ['./feedback-us.component.css']
})
export class FeedbackUsComponent implements OnInit {
  userinfo:User=new User();
  apiServerUrl = 'http://localhost:8080';
  public feedbackValds: FeedbackVald[] = [];
   feedbackVald:FeedbackVald;
  constructor(private feedbackService:FeedbackService,private userservice:UserService) { }

  ngOnInit(): void {
    this.userservice.getUserInfo().subscribe(
      (data) => {
        this.userinfo = data;
        this.getFeedbacks();      },
      (error) => {
        console.log(error);
      }
    );
    this.feedbackVald= new FeedbackVald();


  }
  public getFeedbacks(): void {
    console.log(this.userinfo.idUser+"wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww")
    this.feedbackService.getFeedbacks(this.userinfo.idUser).subscribe(
      (response: FeedbackVald[]) => {
        this.feedbackValds = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message)
      }
    )

  }
}
