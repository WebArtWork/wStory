import {
	SimpleChanges,
	EventEmitter,
	Component,
	OnChanges,
	Output,
	Input,
} from '@angular/core';
import { SelectModule } from 'src/app/core/modules/select/select.module';
import { StoryquestService } from '../../services/storyquest.service';
import { Storyquest } from '../../interfaces/storyquest.interface';

@Component({
	selector: 'storyquest-selector',
	templateUrl: './storyquest-selector.component.html',
	styleUrls: ['./storyquest-selector.component.scss'],
	imports: [SelectModule],
})
export class StoryquestSelectorComponent implements OnChanges {
	@Input() value: string;

	@Output() wChange = new EventEmitter();

	get items(): Storyquest[] {
		return this._storyquestService.storyquests;
	}

	constructor(private _storyquestService: StoryquestService) {}

	ngOnChanges(changes: SimpleChanges): void {
		if (changes['value'] && !changes['value'].firstChange) {
			this.value = changes['value'].currentValue;
		}
	}
}
