import { CrudDocument } from 'wacom';

export interface Storylocation extends CrudDocument {
	story: string;
	thumb: string;
	name: string;
	description: string;
}
