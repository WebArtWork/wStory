import { Injectable } from '@angular/core';
import { Storyresource } from '../interfaces/storyresource.interface';
import { CrudService } from 'wacom';

@Injectable({
	providedIn: 'root',
})
export class StoryresourceService extends CrudService<Storyresource> {
	constructor() {
		super({
			name: 'storyresource',
		});
	}
}
