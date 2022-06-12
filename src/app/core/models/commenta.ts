
export class Commenta {
  public postId?: number;
  public id?: number;
  public name?: string;
  public email?: string;
  public body?: string;

  constructor(
    id?: number,
    postId?: number,
    name?: string,
    email?: string,
    body?: string
  ) {
    this.id = id;
    this.postId = postId;
    this.name = name;
    this.email = email;
    this.body = body;
  }
}
