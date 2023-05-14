export class FeedbackVald {

id!:number;
title!:string;
feedbackText!:string;

type:Type;
rating:Rating;
note:string;

}
export enum Type {
  V,
  NonV
}export enum Rating {
  Bad,
  Poor,
  Fair,
  Good,
  Exellent
}
