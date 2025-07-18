import { CrudDocument } from 'wacom';

export interface Storyunit extends CrudDocument {
	name: string;
	description: string;
}
