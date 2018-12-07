import { Component, OnInit } from '@angular/core';
import {UserForm} from '../../models/users';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpService} from '../../http.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  public user: UserForm;
  allControl: FormGroup;

  saved = false;

  constructor(private httpService: HttpService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.allControl = this.formBuilder.group({
      name: [''],
      mail: ['', [Validators.required]],
      password: ['', [Validators.required]],
      passwordConf: ['', [Validators.required]]
    });
  }

  public submit() {
    console.log(this.allControl, this.allControl.value);
    this.httpService.register(this.allControl.value).subscribe((data: UserForm) => this.user = data);
    this.allControl.reset();
  }

  canDeactivate(): boolean | Observable<boolean> {

    if (!this.saved) {
      return confirm('Вы хотите покинуть страницу?');
    } else {
      return true;
    }
  }
}
