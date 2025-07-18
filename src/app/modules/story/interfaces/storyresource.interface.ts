import { CrudDocument } from 'wacom';

export interface Storyresource extends CrudDocument {
	name: string;
	description: string;
}
