import { CrudDocument } from 'wacom';

export interface Storycharacter extends CrudDocument {
	story: string;
	name: string;
	description: string;
}
