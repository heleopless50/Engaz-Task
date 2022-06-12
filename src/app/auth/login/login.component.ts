import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  constructor(public authService: AuthService, private fb: FormBuilder) {
    this.form = this.fb.group({
      email:['',Validators.required],
      password:['',Validators.required]
    })
  }

  ngOnInit(): void {}

  get email() {
    return this.form.get('email')?.value;
  }

  get password() {
    return this.form.get('password')?.value;
  }


  submit() {
    this.authService.SignIn(this.email,this.password)
  }
}
