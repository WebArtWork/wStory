import { Injectable } from '@angular/core';
import { Storyquest } from '../interfaces/storyquest.interface';
import { CrudService } from 'wacom';

@Injectable({
	providedIn: 'root',
})
export class StoryquestService extends CrudService<Storyquest> {
	constructor() {
		super({
			name: 'storyquest',
		});
	}
}
