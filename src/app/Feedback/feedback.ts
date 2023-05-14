export class Feedback {
  id!:number;
  title!:string;
  feedbackText!:string;

  type:Type;
  rating:Rating;

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
