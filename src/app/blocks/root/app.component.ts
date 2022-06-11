import { Component, OnInit } from '@angular/core';
import { PostCrudService } from 'src/app/core/services/crud-services/post-crud.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app-panel';
  constructor(private postCrudService:PostCrudService){

  }
  ngOnInit(): void {
    // this.postCrudService.findAll().subscribe(data=>console.log(data.filter(a=>a.userId == 2)))
    this.postCrudService.delete(4).subscribe(data=>console.log("deleted"));
  }
}
