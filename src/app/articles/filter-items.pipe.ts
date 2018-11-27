import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterItems'
})

export class FilterItemsPipe implements PipeTransform {
  transform(value: any[], titleArticles: string): any {

  }
}

