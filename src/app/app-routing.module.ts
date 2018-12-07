import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegistrationComponent } from './authorization/registration/registration.component';
import { LoginComponent } from './authorization/login/login.component';
import {HomeComponent} from './home/home.component';
import {ProductsComponent} from './products/products.component';
import {ArticlesComponent} from './articles/articles.component';
import {ArticleBestPricesComponent} from './articles/articles-deployed/article-best-prices/article-best-prices.component';
import {AuthGuard} from './guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'registration', component: RegistrationComponent},
  { path: 'login', component: LoginComponent},
  { path: 'home', component: HomeComponent},
  { path: 'products', component: ProductsComponent, canActivate: [AuthGuard]},
  { path: 'articles', component: ArticlesComponent},
  { path: 'articles/articles-deployed/best-prices', component: ArticleBestPricesComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
