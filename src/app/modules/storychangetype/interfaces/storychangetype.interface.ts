import { CrudDocument } from 'wacom';

export interface Storychangetype extends CrudDocument {
	story: string;
	change: string;
	name: string;
	description: string;
}
