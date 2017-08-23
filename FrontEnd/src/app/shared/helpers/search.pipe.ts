import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'itemsSearch',
    pure: false
})
export class SearchItemsPipe implements PipeTransform {
  transform(allItems: any, searchText: any): any {
  	
    if(searchText == null) return allItems;

    return allItems.filter(function(item){
      return item.task.toLowerCase().indexOf(searchText.toLowerCase()) > -1 || item.note.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
    })
  }
}
