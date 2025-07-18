import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormService } from 'src/app/core/modules/form/form.service';
import { FormInterface } from 'src/app/core/modules/form/interfaces/form.interface';
import { TableModule } from 'src/app/core/modules/table/table.module';
import { TranslateService } from 'src/app/core/modules/translate/translate.service';
import { CrudComponent } from 'wacom';
import { storyquestFormComponents } from '../../formcomponents/storyquest.formcomponents';
import { Storyquest } from '../../interfaces/storyquest.interface';
import { StoryquestService } from '../../services/storyquest.service';

@Component({
	imports: [CommonModule, TableModule],
	templateUrl: './quests.component.html',
	styleUrls: ['./quests.component.scss']
})
export class QuestsComponent extends CrudComponent<
	StoryquestService,
	Storyquest,
	FormInterface
> {
	columns = ['name', 'description'];

	config = this.getConfig();

	constructor(
		_storyquestService: StoryquestService,
		_translate: TranslateService,
		_form: FormService
	) {
		super(storyquestFormComponents, _form, _translate, _storyquestService);

		this.setDocuments();
	}
}
