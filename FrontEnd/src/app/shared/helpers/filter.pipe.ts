import { Pipe, PipeTransform} from '@angular/core';

@Pipe({
	name: 'filterItems'
})

export class FilterItems implements PipeTransform {

	trasnsform(items: Array<any>, args?: any): any {

		if(items === undefined){
			return null;
		}

		return items.filter(function(items, property){
			if(property === 'status') {
				return items.filter(x => x.status == Number(property[args.status]));
			}
			if (property === 'priority') {
				return items.filter(x => x.priority === Number(property[args.priority]));
			}
			if (property === 'assignee') {
				return items.filter(x => x.assignee === Number(property[args.assignee]))
			}
		});

	}
}