import { CrudDocument } from 'wacom';

export interface Storydungeon extends CrudDocument {
	name: string;
	description: string;
}
