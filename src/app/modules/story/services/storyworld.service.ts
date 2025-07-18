import { Injectable } from '@angular/core';
import { Storyworld } from '../interfaces/storyworld.interface';
import { CrudService } from 'wacom';

@Injectable({
	providedIn: 'root',
})
export class StoryworldService extends CrudService<Storyworld> {
	constructor() {
		super({
			name: 'storyworld',
		});
	}
}
