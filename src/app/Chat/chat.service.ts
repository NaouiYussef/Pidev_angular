import { Injectable } from '@angular/core';
import {HttpHeaders,HttpClient,HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import { Chat } from './chat';
@Injectable({
  providedIn: 'root'
})
export class ChatService {
  apiServerUrl='http://localhost:8080';

  constructor(private http:HttpClient) {

  }
  public getChats(url: string): Observable<Chat[]> {
    return this.http.get<Chat[]>(url);
  }
  public addChatMessageAd(chat: Chat): Observable<Chat> {
    return this.http.post<Chat>(`${this.apiServerUrl}/Chat/getChats`,chat);
  }

}
