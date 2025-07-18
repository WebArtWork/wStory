import { CrudDocument } from 'wacom';

export interface Storyworld extends CrudDocument {
	name: string;
	description: string;
}
