import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormService } from 'src/app/core/modules/form/form.service';
import { FormInterface } from 'src/app/core/modules/form/interfaces/form.interface';
import { TableModule } from 'src/app/core/modules/table/table.module';
import { TranslateService } from 'src/app/core/modules/translate/translate.service';
import { CrudComponent } from 'wacom';
import { storytradeFormComponents } from '../../formcomponents/storytrade.formcomponents';
import { Storytrade } from '../../interfaces/storytrade.interface';
import { StorytradeService } from '../../services/storytrade.service';

@Component({
	imports: [CommonModule, TableModule],
	templateUrl: './trades.component.html',
	styleUrls: ['./trades.component.scss']
})
export class TradesComponent extends CrudComponent<
	StorytradeService,
	Storytrade,
	FormInterface
> {
	columns = ['name', 'description'];

	config = this.getConfig();

	constructor(
		_storytradeService: StorytradeService,
		_translate: TranslateService,
		_form: FormService
	) {
		super(storytradeFormComponents, _form, _translate, _storytradeService);

		this.setDocuments();
	}
}
