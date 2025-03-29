import { Pipe, PipeTransform } from '@angular/core';
import { Storychangetype } from 'src/app/modules/storychangetype/interfaces/storychangetype.interface';

@Pipe({
	name: 'types'
})
export class TypesPipe implements PipeTransform {
	transform(types: Storychangetype[], change: string): Storychangetype[] {
		return types.filter((t) => t.change === change);
	}
}
