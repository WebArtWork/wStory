import { Injectable } from '@angular/core';
import { Storyunit } from '../interfaces/storyunit.interface';
import { CrudService } from 'wacom';

@Injectable({
	providedIn: 'root',
})
export class StoryunitService extends CrudService<Storyunit> {
	constructor() {
		super({
			name: 'storyunit',
		});
	}
}
