import { Pipe, PipeTransform } from '@angular/core';
@Pipe({ 
     name: 'sortItems' 
    })
export class SortItemsPipe implements PipeTransform {

    transform(items: Array<any>, args?: any): any {
        
        if(items === undefined){
            return null
        ;}
        return items.sort(function(a, b){
            if(a[args.property] < b[args.property]){                
                return -1 * args.direction;
            }
            else if( a[args.property] > b[args.property]){
                return 1 * args.direction;
            }
            else{
                return 0;
            }
        });
    };
}