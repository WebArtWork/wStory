import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormService } from 'src/app/core/modules/form/form.service';
import { FormInterface } from 'src/app/core/modules/form/interfaces/form.interface';
import { TableModule } from 'src/app/core/modules/table/table.module';
import { TranslateService } from 'src/app/core/modules/translate/translate.service';
import { CrudComponent } from 'wacom';
import { storycharacterFormComponents } from '../../formcomponents/storycharacter.formcomponents';
import { Storycharacter } from '../../interfaces/storycharacter.interface';
import { StorycharacterService } from '../../services/storycharacter.service';
import { StorycharactertypeService } from '../../services/storycharactertype.service';

@Component({
	imports: [CommonModule, TableModule],
	templateUrl: './characters.component.html',
	styleUrls: ['./characters.component.scss']
})
export class CharactersComponent extends CrudComponent<
	StorycharacterService,
	Storycharacter,
	FormInterface
> {
	story = this._router.url.includes('/characters/')
		? this._router.url.replace('/characters/', '')
		: '';

	override updatableFields = [
		'_id',
		'thumb',
		'name',
		'description',
		'order',
		'data'
	];

	override configType: 'local' | 'server' = 'local';

	override allowCreate(): boolean {
		return !!this.story;
	}

	columns = ['name', 'description'];

	config = this.getConfig();

	constructor(
		_storycharacterService: StorycharacterService,
		_translate: TranslateService,
		_form: FormService,
		private _router: Router,
		private _typeService: StorycharactertypeService
	) {
		super(
			storycharacterFormComponents,
			_form,
			_translate,
			_storycharacterService
		);

		this.setDocuments();

		this._typeService.loaded.then(() => {
			const usedTypes = this.story
				? this._typeService.storycharactertpess.filter(
						(t) => t.story === this.story
					)
				: this._typeService.storycharactertpess;

			for (const type of this._typeService.storycharactertpess) {
				const component = storycharacterFormComponents.components.find(
					(c) => c.key === 'data.' + type.name
				);

				if (component) {
					component.hidden = !usedTypes.find(
						(t) => type._id === t._id
					);
				}
			}
		});
	}
}
