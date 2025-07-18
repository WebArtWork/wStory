import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormService } from 'src/app/core/modules/form/form.service';
import { FormInterface } from 'src/app/core/modules/form/interfaces/form.interface';
import { TableModule } from 'src/app/core/modules/table/table.module';
import { TranslateService } from 'src/app/core/modules/translate/translate.service';
import { CrudComponent } from 'wacom';
import { storydungeonFormComponents } from '../../formcomponents/storydungeon.formcomponents';
import { Storydungeon } from '../../interfaces/storydungeon.interface';
import { StorydungeonService } from '../../services/storydungeon.service';

@Component({
	imports: [CommonModule, TableModule],
	templateUrl: './dungeons.component.html',
	styleUrls: ['./dungeons.component.scss']
})
export class DungeonsComponent extends CrudComponent<
	StorydungeonService,
	Storydungeon,
	FormInterface
> {
	columns = ['name', 'description'];

	config = this.getConfig();

	constructor(
		_storydungeonService: StorydungeonService,
		_translate: TranslateService,
		_form: FormService
	) {
		super(
			storydungeonFormComponents,
			_form,
			_translate,
			_storydungeonService
		);

		this.setDocuments();
	}
}
