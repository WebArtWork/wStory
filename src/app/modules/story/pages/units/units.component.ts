import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormService } from 'src/app/core/modules/form/form.service';
import { FormInterface } from 'src/app/core/modules/form/interfaces/form.interface';
import { TableModule } from 'src/app/core/modules/table/table.module';
import { TranslateService } from 'src/app/core/modules/translate/translate.service';
import { CrudComponent } from 'wacom';
import { storyunitFormComponents } from '../../formcomponents/storyunit.formcomponents';
import { Storyunit } from '../../interfaces/storyunit.interface';
import { StoryunitService } from '../../services/storyunit.service';

@Component({
	imports: [CommonModule, TableModule],
	templateUrl: './units.component.html',
	styleUrls: ['./units.component.scss']
})
export class UnitsComponent extends CrudComponent<
	StoryunitService,
	Storyunit,
	FormInterface
> {
	columns = ['name', 'description'];

	config = this.getConfig();

	constructor(
		_storyunitService: StoryunitService,
		_translate: TranslateService,
		_form: FormService
	) {
		super(storyunitFormComponents, _form, _translate, _storyunitService);

		this.setDocuments();
	}
}
