import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatFormFieldModule,
  MatDialogModule,
  MatIconModule, MatGridListModule, MatPaginatorModule, MatSelectModule
} from '@angular/material';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule} from './app-routing.module';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
import { OrderModule } from 'ngx-order-pipe';
import { AuthGuard} from './guards/auth.guard';

import { AppComponent } from './app.component';
import { RegistrationComponent } from './authorization/registration/registration.component';
import { LoginComponent } from './authorization/login/login.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { NgxPaginationModule} from 'ngx-pagination';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { ArticlesComponent } from './articles/articles.component';
import { FilterItemsPipe } from './articles/filter-items.pipe';
import { ArticleBestPricesComponent } from './articles/articles-deployed/article-best-prices/article-best-prices.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    HomeComponent,
    ProductsComponent,
    ArticlesComponent,
    FilterItemsPipe,
    ArticleBestPricesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDialogModule,
    HttpClientModule,
    MatIconModule,
    MatGridListModule,
    OrderModule,
    MatPaginatorModule,
    NgxPaginationModule,
    FilterPipeModule,
    MatSelectModule
  ],
  providers: [HttpService,  AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
