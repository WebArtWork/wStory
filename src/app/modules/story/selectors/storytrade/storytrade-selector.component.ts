import {
	SimpleChanges,
	EventEmitter,
	Component,
	OnChanges,
	Output,
	Input,
} from '@angular/core';
import { SelectModule } from 'src/app/core/modules/select/select.module';
import { StorytradeService } from '../../services/storytrade.service';
import { Storytrade } from '../../interfaces/storytrade.interface';

@Component({
	selector: 'storytrade-selector',
	templateUrl: './storytrade-selector.component.html',
	styleUrls: ['./storytrade-selector.component.scss'],
	imports: [SelectModule],
})
export class StorytradeSelectorComponent implements OnChanges {
	@Input() value: string;

	@Output() wChange = new EventEmitter();

	get items(): Storytrade[] {
		return this._storytradeService.storytrades;
	}

	constructor(private _storytradeService: StorytradeService) {}

	ngOnChanges(changes: SimpleChanges): void {
		if (changes['value'] && !changes['value'].firstChange) {
			this.value = changes['value'].currentValue;
		}
	}
}
