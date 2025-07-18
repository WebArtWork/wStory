import { CrudDocument } from 'wacom';

export interface Storybuilding extends CrudDocument {
	name: string;
	description: string;
}
