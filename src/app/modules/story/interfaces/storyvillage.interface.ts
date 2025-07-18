import { CrudDocument } from 'wacom';

export interface Storyvillage extends CrudDocument {
	name: string;
	description: string;
}
