import { CrudDocument } from 'wacom';

export interface Storyquest extends CrudDocument {
	name: string;
	description: string;
}
