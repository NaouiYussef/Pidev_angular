import { Component,ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {HttpHeaders,HttpClient,HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import * as SockJS from 'sockjs-client';
import * as Stomp from 'stompjs';
import{ChatService} from "../chat.service";
import {HttpErrorResponse} from "@angular/common/http";
import {Chat} from "../chat";
import { User } from '../../user/user';
import { UserService } from '../../user/user.service';
@Component({
  selector: 'app-chat-f',
  templateUrl: './chat-f.component.html',
  styleUrls: ['./chat-f.component.css']
})
export class ChatFComponent implements OnInit {apiServerUrl='http://localhost:8080';
  userInfo: User = new User();
  public chats:Chat[]=[];


  @ViewChild('messageForm') messageForm: ElementRef;

  @ViewChild('messageInput') messageInput: ElementRef;

  @ViewChild('messageArea') messageArea: ElementRef;

  @ViewChild('connectingElement') connectingElement: ElementRef;
  private stompClient: any;
  private username: string;
  public messages: Array<any> = [];
  @ViewChild('chatPage') chatPage: ElementRef;
  @ViewChild('messageElement') messageElement: ElementRef;
  @ViewChild('usernameElement') usernameElement: ElementRef;

  @ViewChild('avatarElement') avatarElement: ElementRef;




  private colors = [
    '#2196F3', '#32c787', '#00BCD4', '#ff5652',
    '#ffc107', '#ff85af', '#FF9800', '#39bbb0'
  ];

  constructor(private userservice: UserService,private renderer: Renderer2,private chatService :ChatService) {

  }

  connect(): void {
    this.username = this.userInfo.username;

    const socket = new SockJS('http://localhost:8080/server1');
    this.stompClient = Stomp.over(socket);
    this.stompClient.connect({}, this.onConnected.bind(this), this.onError.bind(this));

  }

  onConnected(): void {
    // Subscribe to the Public Topic
    this.stompClient.subscribe('/user/'+this.userInfo.username+'/private', this.onMessageReceived.bind(this));

    // Tell your username to the server
    this.stompClient.send('/app/chat.addUser',
      {},
      JSON.stringify({sender: this.userInfo.username, type: 'JOIN'})
    );
    this.connectingElement.nativeElement.classList.add('hidden');
  }

  onError(error: any): void {
    this.connectingElement.nativeElement.textContent = 'Could not connect to WebSocket server. Please refresh this page to try again!';
    this.connectingElement.nativeElement.style.color = 'red';
  }

  sendMessage(): void {
    const messageContent = this.messageInput.nativeElement.value.trim();


    if (messageContent && this.stompClient) {
      const chatMessage = {
        sender: this.userInfo.username,
        content: this.messageInput.nativeElement.value,
        type: 'CHAT'
      };
      this.stompClient.send('/app/private-message', {}, JSON.stringify(chatMessage));
      this.messageInput.nativeElement.value = '';
    }

  }

  onMessageReceived(payload: any): void {
    const chatMessage = JSON.parse(payload.body);

    const messageElement = document.createElement('li');

    if (chatMessage.type === 'JOIN') {
      messageElement.classList.add('event-message');
      chatMessage.content = chatMessage.sender + ' joined!';
    } else if (chatMessage.type === 'LEAVE') {
      messageElement.classList.add('event-message');
      chatMessage.content = chatMessage.sender + ' left!';
    } else {
      messageElement.classList.add('chat-message');

      const avatarElement = document.createElement('i');
      const avatarText = document.createTextNode(chatMessage.sender[0]);
      avatarElement.appendChild(avatarText);
      avatarElement.style.backgroundColor = this.getAvatarColor(chatMessage.sender);

      messageElement.appendChild(avatarElement);

      const usernameElement = document.createElement('span');
      const usernameText = document.createTextNode(chatMessage.sender);
      usernameElement.appendChild(usernameText);
      messageElement.appendChild(usernameElement);
    }

    const textElement = document.createElement('p');
    const messageText = document.createTextNode(chatMessage.content);
    textElement.appendChild(messageText);

    messageElement.appendChild(textElement);

    this.messages.push(chatMessage);
    const messageArea = document.querySelector('#messageArea');
    messageArea.scrollTop = messageArea.scrollHeight;
  }

  getAvatarColor(messageSender: string) {
    let hash = 0;
    for (let i = 0; i < messageSender.length; i++) {
      hash = 31 * hash + messageSender.charCodeAt(i);
    }
    const index = Math.abs(hash % this.colors.length);
    return this.colors[index];
  }

  ngOnInit(): void {
    this.connect();

    this.userservice.getUserInfo().subscribe(
      (data) => {
        this.userInfo = data;
      },
      (error) => {
        console.log(error);
      }
    );

  }

}
