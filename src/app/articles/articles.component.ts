import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  public listArticles = [
    {
      img: 'http://placehold.it/160x200',
      title: 'Some info',
      date: '20.05.2018',
      comments: 36,
      likes: 300
    },
    {
      img: 'http://placehold.it/160x200',
      title: 'Lorem Ipsum',
      date: '11-11-2016',
      comments: 100,
      likes: 40
    },
    {
      img: 'http://placehold.it/160x200',
      title: 'Products sale',
      date: '01-08-2017',
      comments: 25,
      likes: 690
    },
    {
      img: 'http://placehold.it/160x200',
      title: 'Best prices',
      date: '12-04-2018',
      comments: 15,
      likes: 234
    },
    {
      img: 'http://placehold.it/160x200',
      title: 'New items',
      date: '12-07-2018',
      comments: 65,
      likes: 247
    },
    {
      img: 'http://placehold.it/160x200',
      title: 'Sale',
      date: '12-07-2018',
      comments: 89,
      likes: 437
    },
    {
      img: 'http://placehold.it/160x200',
      title: 'Some info',
      date: '20-05-2018',
      comments: 36,
      likes: 300
    },
    {
      img: 'http://placehold.it/160x200',
      title: 'Lorem Ipsum',
      date: '11-11-2016',
      comments: 100,
      likes: 40
    }
  ];

  titleArticles = '';

  constructor() { }

  ngOnInit() {
  }

  sortAsc() {
    this.listArticles.sort((a, b) => {
      if (a.comments < b.comments) {
        return -1;
      }
      if (a.comments < b.comments) {
        return 1;
      }
      return 0;
    });
  }

  sortDesc() {
    this.listArticles.sort((a, b) => {
      if (a.comments > b.comments) {
        return -1;
      }
      if (a.comments > b.comments) {
        return 1;
      }
      return 0;
    });
  }
}
