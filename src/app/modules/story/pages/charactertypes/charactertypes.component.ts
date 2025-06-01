import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StorycharactertypeService } from '../../services/storycharactertype.service';
import { Storycharactertype } from '../../interfaces/storycharactertype.interface';
import { FormService } from 'src/app/core/modules/form/form.service';
import { TranslateService } from 'src/app/core/modules/translate/translate.service';
import { storycharactertypeFormComponents } from '../../formcomponents/storycharactertype.formcomponents';
import { FormInterface } from 'src/app/core/modules/form/interfaces/form.interface';
import { TableModule } from 'src/app/core/modules/table/table.module';
import { CrudComponent } from 'wacom';

@Component({
	imports: [CommonModule, TableModule],
	templateUrl: './charactertypes.component.html',
	styleUrls: ['./charactertypes.component.scss'],
})
export class CharactertypesComponent extends CrudComponent<
	StorycharactertypeService,
	Storycharactertype,
	FormInterface
> {
	columns = ['name', 'description'];

	config = {
		...this.getConfig(),
	};

	constructor(
		_storycharactertypeService: StorycharactertypeService,
		_translate: TranslateService,
		_form: FormService
	) {
		super(storycharactertypeFormComponents, _form, _translate, _storycharactertypeService);

		this.setDocuments();
	}
}
