import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserForm} from '../../models/users';
import {HttpService} from '../../http.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  allLoginControl: FormGroup;
  public user: UserForm;

  constructor(private router: Router, private httpService: HttpService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.allLoginControl = this.formBuilder.group({
      name: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  saveToken(data) {
    localStorage.setItem('token', data.token);
  }

  submitLogin() {
    console.log(this.allLoginControl, this.allLoginControl.value);
    this.httpService.login(this.allLoginControl.value).subscribe(
      (data: UserForm) => {
        console.log(data);
        this.user = data;
        this.saveToken(data);
        this.allLoginControl.reset();
        this.router.navigate(['/products']);
      });
  }
}
