export class CommentPayload{
    id?: number;
    text: string;
    postId: number;
    createdDate?: String;
    userName:string;
    postName?: String;
    duration?: string;
    parentComment?: CommentPayload;
    subComments?: CommentPayload[];
    parentCommentId ?: number;
    sub: boolean;
   
}