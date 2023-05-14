import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Feedback, Type} from '../feedback'
import {ActivatedRoute, Router} from "@angular/router";
import {FeedbackService} from "../feedback.service";
import {User} from "../../user/user";
import{UserService} from "../../user/user.service";

@Component({
  selector: 'app-feedback-f',
  templateUrl: './feedback-f.component.html',
  styleUrls: ['./feedback-f.component.css']
})
export class FeedbackFComponent implements OnInit {
  userInfo: User = new User();
  msg:string=''

  feedbackForm: FormGroup;
  id:number;
  constructor(    private router: Router,
                  private route:ActivatedRoute,private fb: FormBuilder,private feedbacks:FeedbackService,private userservice:UserService) { }
  displayForm = true;
  feedback: Feedback = new Feedback();

  openForm() {
    this.displayForm = true;
  }

  closeForm() {
    this.displayForm = false;
  }
  ngOnInit(): void {
    this.userservice.getUserInfo().subscribe(
      (data) => {
        this.userInfo = data;
      },
      (error) => {
        console.log(error);
      }
    );
    this.feedbackForm = this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
      feedbackText: ['', Validators.required],
      receiver: ['', Validators.required],
      type: [Type.V, Validators.required],
      rating: ['', Validators.required],
    });
    this.route.params.subscribe(params => {
      this.id = +params['id'];
    });

  }
  submitForm(): void {
    console.log(this.feedback);
    this.feedback = {
      feedbackText: this.feedback.feedbackText,
      id: 0,

      rating: this.feedback.rating,
      title: this.feedback.title,
      type:Type.NonV,
    };
    this.feedbacks.addFeedback(this.feedback,this.id,this.userInfo.idUser).subscribe(
      (response) => {
        if (response === false) {
          // Show a message
          this.msg = "Le mail existe deja";
        } else {
          // Redirect to the sign in page
          this.router.navigateByUrl('app-product-front');
        }
      },
      (error) => {
        console.log(error);
      }
    );
    this.closeForm();
  }


}
