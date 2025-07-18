import { Injectable } from '@angular/core';
import { Storybuilding } from '../interfaces/storybuilding.interface';
import { CrudService } from 'wacom';

@Injectable({
	providedIn: 'root',
})
export class StorybuildingService extends CrudService<Storybuilding> {
	constructor() {
		super({
			name: 'storybuilding',
		});
	}
}
