import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit,DoCheck{

  constructor(private authService:AuthService,private router:Router) { }
  ngDoCheck(): void {
    this.logged = this.authService.isLoggedIn
  }
  logged:boolean = false
  ngOnInit(): void {

  }

sign(){
  console.log(this.logged)
if(this.logged){
this.authService.SignOut();
}else{
  this.router.navigate(['/auth'])
}
}

}
