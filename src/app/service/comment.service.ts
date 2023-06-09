import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommentPayload } from '../model/comment-model'
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
export class CommentService {

  constructor(private httpClient: HttpClient) { }

  getAllCommentsForPost(postId: number): Observable<CommentPayload[]> {
    return this.httpClient.get<CommentPayload[]>('http://localhost:8080/api/comments/by-post/' + postId);
  }

  postComment(commentPayload: CommentPayload): Observable<any> {
    return this.httpClient.post<any>('http://localhost:8080/api/comments/', commentPayload);
  }

  getAllCommentsByUser(name: string) {
    return this.httpClient.get<CommentPayload[]>('http://localhost:8080/api/comments/by-user/' + name);
  }

  getAllComments(): Observable<Array<CommentPayload>> {
    return this.httpClient.get<Array<CommentPayload>>('http://localhost:8080/api/comments/');
  }

  deleteById(id: number): Observable<void> {
    return this.httpClient.delete<void>('http://localhost:8080/api/comments/' + id);
  }
  createSubComment(commentPayload: CommentPayload,id:number): Observable<any> {
    return this.httpClient.post<any>('http://localhost:8080/api/comments/' + id, commentPayload);
  }

}