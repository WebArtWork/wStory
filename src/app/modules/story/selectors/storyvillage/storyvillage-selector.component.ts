import {
	SimpleChanges,
	EventEmitter,
	Component,
	OnChanges,
	Output,
	Input,
} from '@angular/core';
import { SelectModule } from 'src/app/core/modules/select/select.module';
import { StoryvillageService } from '../../services/storyvillage.service';
import { Storyvillage } from '../../interfaces/storyvillage.interface';

@Component({
	selector: 'storyvillage-selector',
	templateUrl: './storyvillage-selector.component.html',
	styleUrls: ['./storyvillage-selector.component.scss'],
	imports: [SelectModule],
})
export class StoryvillageSelectorComponent implements OnChanges {
	@Input() value: string;

	@Output() wChange = new EventEmitter();

	get items(): Storyvillage[] {
		return this._storyvillageService.storyvillages;
	}

	constructor(private _storyvillageService: StoryvillageService) {}

	ngOnChanges(changes: SimpleChanges): void {
		if (changes['value'] && !changes['value'].firstChange) {
			this.value = changes['value'].currentValue;
		}
	}
}
