import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Post } from '../../models/post';
import { CrudService } from '../generic-crud-service/crud-service';



@Injectable({
  providedIn: 'root'
})
export class PostCrudService extends CrudService<Post,Number> {

  constructor(protected override _http: HttpClient) {
    super(_http, `${environment.api.baseUrl}posts`);
  }
}
