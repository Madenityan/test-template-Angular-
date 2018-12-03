import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-article-best-prices',
  templateUrl: './article-best-prices.component.html',
  styleUrls: ['./article-best-prices.component.css']
})
export class ArticleBestPricesComponent implements OnInit {

  public comments = [];

  public form: FormGroup = new FormGroup({
    comment: new FormControl()
  });

  constructor() { }

  ngOnInit() {
  }

  saveValue() {
    localStorage.setItem('value', JSON.stringify(this.form.value.comment));
  }

  submit() {
    this.comments.push(this.form.value.comment);
    this.saveValue();
    this.form.reset();
  }
}
