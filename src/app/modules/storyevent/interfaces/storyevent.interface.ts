import { CrudDocument } from 'wacom';

export interface Storyevent extends CrudDocument {
	story: string;
	thumb: string;
	name: string;
	description: string;
}
