import { Pipe, PipeTransform} from '@angular/core';

@Pipe({
	name: 'filterItems'
})

export class FilterItemsPipe implements PipeTransform {

	transform(items: Array<any>, filter_property: string, filter_value: Number): any {

		if(filter_property == null && filter_value ==null){
			return items;
		}

		if (filter_property === 'created') {
		  return items.filter(x => x.created_by == Number(filter_value));
		}
		if (filter_property === 'assigned') {
		  return items.filter(x => x.assigned_to === Number(filter_value));
		}
		if (filter_property === 'completed') {
		  return items.filter(x => x.created_by === Number(filter_value) && x.status === 3)
		}

	}
}
