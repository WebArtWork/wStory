import {
	SimpleChanges,
	EventEmitter,
	Component,
	OnChanges,
	Output,
	Input,
} from '@angular/core';
import { SelectModule } from 'src/app/core/modules/select/select.module';
import { StoryresourceService } from '../../services/storyresource.service';
import { Storyresource } from '../../interfaces/storyresource.interface';

@Component({
	selector: 'storyresource-selector',
	templateUrl: './storyresource-selector.component.html',
	styleUrls: ['./storyresource-selector.component.scss'],
	imports: [SelectModule],
})
export class StoryresourceSelectorComponent implements OnChanges {
	@Input() value: string;

	@Output() wChange = new EventEmitter();

	get items(): Storyresource[] {
		return this._storyresourceService.storyresources;
	}

	constructor(private _storyresourceService: StoryresourceService) {}

	ngOnChanges(changes: SimpleChanges): void {
		if (changes['value'] && !changes['value'].firstChange) {
			this.value = changes['value'].currentValue;
		}
	}
}
