import { Injectable } from '@angular/core';
import { Storydungeon } from '../interfaces/storydungeon.interface';
import { CrudService } from 'wacom';

@Injectable({
	providedIn: 'root',
})
export class StorydungeonService extends CrudService<Storydungeon> {
	constructor() {
		super({
			name: 'storydungeon',
		});
	}
}
