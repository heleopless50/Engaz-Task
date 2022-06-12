import { NumberSymbol } from "@angular/common";

export class Post {
  public userId?: number;
  public id?: number;
  public title?: string;
  public body?: string;



  constructor(id?:number,userId?:number,title?:string,body?:string){
    this.id = id;
    this.userId = userId;
    this.title = title;
    this.body = body
  }
}
