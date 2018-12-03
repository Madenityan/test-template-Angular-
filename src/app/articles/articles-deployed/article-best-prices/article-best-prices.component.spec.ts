import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleBestPricesComponent } from './article-best-prices.component';

describe('ArticleBestPricesComponent', () => {
  let component: ArticleBestPricesComponent;
  let fixture: ComponentFixture<ArticleBestPricesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleBestPricesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleBestPricesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
