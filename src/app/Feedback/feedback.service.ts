import { Injectable } from '@angular/core';
import {User} from "../user/user";
import {catchError, Observable, throwError} from "rxjs";
import {Feedback} from "./feedback";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import{FeedbackVald} from "./feedback-vald";

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  constructor(private http: HttpClient) { }

  public addFeedback(feedback: Feedback,id:number,ids:number): Observable<boolean> {
    console.log("service", feedback);
    return this.http.post<boolean>('http://localhost:8080/feedback/afFP/'+id+'/'+ids, feedback).pipe(
      catchError((error: any) => {
        console.log("hihihi", error);
        return throwError(error);
      })
    );
  }
  public getFeedbacks( id :number): Observable<FeedbackVald[]> {
    return this.http.get<FeedbackVald[]>('http://localhost:8080/feedbackvald/showAll/'+id);
  }
  public getFeedbackss(url: string): Observable<Feedback[]> {
    return this.http.get<Feedback[]>(url);
  }
  public valdFeedback(id:number,s:string): Observable<boolean> {

    return this.http.get<boolean>('http://localhost:8080/feedback/vald/'+id+'/'+s).pipe(
      catchError((error: any) => {
        return throwError(error);
      })
    );
  }

}
