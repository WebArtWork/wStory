import { CrudDocument } from 'wacom';

export interface Storycharactertype extends CrudDocument {
	name: string;
	description: string;
}
