import { Pipe, PipeTransform } from '@angular/core';
import { Storyevent } from 'src/app/modules/story/interfaces/storyevent.interface';

@Pipe({
	name: 'events'
})
export class EventsPipe implements PipeTransform {
	transform(types: Storyevent[], story: string): Storyevent[] {
		return types.filter((t) => t.story === story);
	}
}
