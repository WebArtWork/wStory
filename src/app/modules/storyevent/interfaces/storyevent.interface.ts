import { CrudDocument } from 'wacom';

export interface Storyevent extends CrudDocument {
	name: string;
	description: string;
}
