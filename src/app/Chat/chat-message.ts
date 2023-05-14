import {Chat} from "./chat";

export class ChatMessage {
  id!:number;
  content!:string;
  sender!:string;
  t_stamp!:string;
  receiver!:string;
  chat!:Chat;

}

enum MessageType {
  CHAT,
  JOIN,
  LEAVE
}
