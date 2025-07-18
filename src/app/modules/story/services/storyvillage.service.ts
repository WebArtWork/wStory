import { Injectable } from '@angular/core';
import { Storyvillage } from '../interfaces/storyvillage.interface';
import { CrudService } from 'wacom';

@Injectable({
	providedIn: 'root',
})
export class StoryvillageService extends CrudService<Storyvillage> {
	constructor() {
		super({
			name: 'storyvillage',
		});
	}
}
