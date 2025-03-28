import { CrudDocument } from 'wacom';

export interface Story extends CrudDocument {
	name: string;
	description: string;
}
