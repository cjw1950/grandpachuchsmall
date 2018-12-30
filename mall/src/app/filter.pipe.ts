import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(prodName: any, term: any): any {
    if ( term === undefined)  {return  prodName; }
    return prodName.filter( function ( prodName ) {
      return prodName.name.toLowerCase().includes(term.toLowerCase());
      });
  }

}
