import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

 public listProducts = [
    {
     image: 'http://placehold.it/150x150',
     header: 'title-1',
     price: '300'
   },
   {
     image: 'http://placehold.it/150x150',
     header: 'title-2',
     price: '390'
   },
   {
     image: 'http://placehold.it/150x150',
     header: 'title-3',
     price: '20'
   },
   {
     image: 'http://placehold.it/150x150',
     header: 'title-4',
     price: '40'
   },
   {
     image: 'http://placehold.it/150x150',
     header: 'title-5',
     price: '300'
   },
   {
     image: 'http://placehold.it/150x150',
     header: 'title-6',
     price: '390'
   },
   {
     image: 'http://placehold.it/150x150',
     header: 'title-7',
     price: '20'
   },
   {
     image: 'http://placehold.it/150x150',
     header: 'title-8',
     price: '40'
   },
   {
     image: 'http://placehold.it/150x150',
     header: 'title-9',
     price: '300'
   },
   {
     image: 'http://placehold.it/150x150',
     header: 'title-10',
     price: '390'
   },
   {
     image: 'http://placehold.it/150x150',
     header: 'title-11',
     price: '20'
   },
   {
     image: 'http://placehold.it/150x150',
     header: 'title-12',
     price: '40'
   },
 ];

  constructor() { }

  ngOnInit() {

  }

}
