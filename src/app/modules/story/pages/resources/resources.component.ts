import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormService } from 'src/app/core/modules/form/form.service';
import { FormInterface } from 'src/app/core/modules/form/interfaces/form.interface';
import { TableModule } from 'src/app/core/modules/table/table.module';
import { TranslateService } from 'src/app/core/modules/translate/translate.service';
import { CrudComponent } from 'wacom';
import { storyresourceFormComponents } from '../../formcomponents/storyresource.formcomponents';
import { Storyresource } from '../../interfaces/storyresource.interface';
import { StoryresourceService } from '../../services/storyresource.service';

@Component({
	imports: [CommonModule, TableModule],
	templateUrl: './resources.component.html',
	styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent extends CrudComponent<
	StoryresourceService,
	Storyresource,
	FormInterface
> {
	columns = ['name', 'description'];

	config = this.getConfig();

	constructor(
		_storyresourceService: StoryresourceService,
		_translate: TranslateService,
		_form: FormService
	) {
		super(
			storyresourceFormComponents,
			_form,
			_translate,
			_storyresourceService
		);

		this.setDocuments();
	}
}
