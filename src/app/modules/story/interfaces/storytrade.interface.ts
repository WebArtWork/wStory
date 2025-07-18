import { CrudDocument } from 'wacom';

export interface Storytrade extends CrudDocument {
	name: string;
	description: string;
}
