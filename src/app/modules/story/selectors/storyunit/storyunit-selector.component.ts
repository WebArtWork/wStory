import {
	SimpleChanges,
	EventEmitter,
	Component,
	OnChanges,
	Output,
	Input,
} from '@angular/core';
import { SelectModule } from 'src/app/core/modules/select/select.module';
import { StoryunitService } from '../../services/storyunit.service';
import { Storyunit } from '../../interfaces/storyunit.interface';

@Component({
	selector: 'storyunit-selector',
	templateUrl: './storyunit-selector.component.html',
	styleUrls: ['./storyunit-selector.component.scss'],
	imports: [SelectModule],
})
export class StoryunitSelectorComponent implements OnChanges {
	@Input() value: string;

	@Output() wChange = new EventEmitter();

	get items(): Storyunit[] {
		return this._storyunitService.storyunits;
	}

	constructor(private _storyunitService: StoryunitService) {}

	ngOnChanges(changes: SimpleChanges): void {
		if (changes['value'] && !changes['value'].firstChange) {
			this.value = changes['value'].currentValue;
		}
	}
}
