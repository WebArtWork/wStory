import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormService } from 'src/app/core/modules/form/form.service';
import { FormInterface } from 'src/app/core/modules/form/interfaces/form.interface';
import { TableModule } from 'src/app/core/modules/table/table.module';
import { TranslateService } from 'src/app/core/modules/translate/translate.service';
import { CrudComponent } from 'wacom';
import { storybuildingFormComponents } from '../../formcomponents/storybuilding.formcomponents';
import { Storybuilding } from '../../interfaces/storybuilding.interface';
import { StorybuildingService } from '../../services/storybuilding.service';

@Component({
	imports: [CommonModule, TableModule],
	templateUrl: './buildings.component.html',
	styleUrls: ['./buildings.component.scss']
})
export class BuildingsComponent extends CrudComponent<
	StorybuildingService,
	Storybuilding,
	FormInterface
> {
	columns = ['name', 'description'];

	config = this.getConfig();

	constructor(
		_storybuildingService: StorybuildingService,
		_translate: TranslateService,
		_form: FormService
	) {
		super(
			storybuildingFormComponents,
			_form,
			_translate,
			_storybuildingService
		);

		this.setDocuments();
	}
}
