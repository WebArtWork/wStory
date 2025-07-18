import { Injectable } from '@angular/core';
import { Storytrade } from '../interfaces/storytrade.interface';
import { CrudService } from 'wacom';

@Injectable({
	providedIn: 'root',
})
export class StorytradeService extends CrudService<Storytrade> {
	constructor() {
		super({
			name: 'storytrade',
		});
	}
}
