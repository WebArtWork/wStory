import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormService } from 'src/app/core/modules/form/form.service';
import { FormInterface } from 'src/app/core/modules/form/interfaces/form.interface';
import { TableModule } from 'src/app/core/modules/table/table.module';
import { TranslateService } from 'src/app/core/modules/translate/translate.service';
import { CrudComponent } from 'wacom';
import { storyworldFormComponents } from '../../formcomponents/storyworld.formcomponents';
import { Storyworld } from '../../interfaces/storyworld.interface';
import { StoryworldService } from '../../services/storyworld.service';

@Component({
	imports: [CommonModule, TableModule],
	templateUrl: './worlds.component.html',
	styleUrls: ['./worlds.component.scss']
})
export class WorldsComponent extends CrudComponent<
	StoryworldService,
	Storyworld,
	FormInterface
> {
	columns = ['name', 'description'];

	config = this.getConfig();

	constructor(
		_storyworldService: StoryworldService,
		_translate: TranslateService,
		_form: FormService
	) {
		super(storyworldFormComponents, _form, _translate, _storyworldService);

		this.setDocuments();
	}
}
