import {
	SimpleChanges,
	EventEmitter,
	Component,
	OnChanges,
	Output,
	Input,
} from '@angular/core';
import { SelectModule } from 'src/app/core/modules/select/select.module';
import { StoryworldService } from '../../services/storyworld.service';
import { Storyworld } from '../../interfaces/storyworld.interface';

@Component({
	selector: 'storyworld-selector',
	templateUrl: './storyworld-selector.component.html',
	styleUrls: ['./storyworld-selector.component.scss'],
	imports: [SelectModule],
})
export class StoryworldSelectorComponent implements OnChanges {
	@Input() value: string;

	@Output() wChange = new EventEmitter();

	get items(): Storyworld[] {
		return this._storyworldService.storyworlds;
	}

	constructor(private _storyworldService: StoryworldService) {}

	ngOnChanges(changes: SimpleChanges): void {
		if (changes['value'] && !changes['value'].firstChange) {
			this.value = changes['value'].currentValue;
		}
	}
}
