import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormService } from 'src/app/core/modules/form/form.service';
import { FormInterface } from 'src/app/core/modules/form/interfaces/form.interface';
import { TableModule } from 'src/app/core/modules/table/table.module';
import { TranslateService } from 'src/app/core/modules/translate/translate.service';
import { CrudComponent } from 'wacom';
import { storyvillageFormComponents } from '../../formcomponents/storyvillage.formcomponents';
import { Storyvillage } from '../../interfaces/storyvillage.interface';
import { StoryvillageService } from '../../services/storyvillage.service';

@Component({
	imports: [CommonModule, TableModule],
	templateUrl: './villages.component.html',
	styleUrls: ['./villages.component.scss']
})
export class VillagesComponent extends CrudComponent<
	StoryvillageService,
	Storyvillage,
	FormInterface
> {
	columns = ['name', 'description'];

	config = this.getConfig();

	constructor(
		_storyvillageService: StoryvillageService,
		_translate: TranslateService,
		_form: FormService
	) {
		super(
			storyvillageFormComponents,
			_form,
			_translate,
			_storyvillageService
		);

		this.setDocuments();
	}
}
