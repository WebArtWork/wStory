import { CrudDocument } from 'wacom';

export interface Storycharacter extends CrudDocument {
	story: string;
	thumb: string;
	name: string;
	description: string;
}
