import { CrudDocument } from 'wacom';

export interface Storylocation extends CrudDocument {
	story: string;
	name: string;
	description: string;
}
